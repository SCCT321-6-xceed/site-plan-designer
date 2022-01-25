import { useEffect, useLayoutEffect, useRef, useState, useCallback, } from 'react'

function useEventListener(
  eventName, // string to allow custom event
  handler,
  element
) {
  // Create a ref that stores handler
  const savedHandler = useRef()

  useEffect(() => {
    // Define the listening target
    const targetElement = element?.current || window
    if (!(targetElement && targetElement.addEventListener)) {
      return
    }

    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (e) => {
      if (!!savedHandler?.current) {
        savedHandler.current(e)
      }
    }

    targetElement.addEventListener(eventName, eventListener)

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, handler])
}



function useElementSize() {
    // Mutable values like 'ref.current' aren't valid dependencies
    // because mutating them doesn't re-render the component.
    // Instead, we use a state as a ref to be reactive.
    const [ref, setRef] = useState(null)
    const [size, setSize] = useState({
      width: 0,
      height: 0,
    })
  
    // Prevent too many rendering using useCallback
    const handleSize = useCallback(() => {
      setSize({
        width: ref?.offsetWidth || 0,
        height: ref?.offsetHeight || 0,
      })
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref?.offsetHeight, ref?.offsetWidth])
  
    useEventListener('resize', handleSize)
  
    useLayoutEffect(() => {
      handleSize()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref?.offsetHeight, ref?.offsetWidth])
  
    return [setRef, size]
  }

  export default useElementSize