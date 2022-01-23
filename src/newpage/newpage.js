import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

export default class Newpage extends React.Component {

  render() {
    return (
      <div>
        <div style={{height: "700px", width: "800px", paddingLeft: "300px", position: "absolute"}}>
          <img src="https://wcs.smartdraw.com/floor-plan/img/template-floor-plan.png?bn=15100111810"/>
        </div>
        <div position="absolute">
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <div className="handle">
                <img src="https://cdn-icons-png.flaticon.com/512/740/740845.png" width = "100px" height = "100px" draggable = {false} />
              </div>
            </div>
          </Draggable>

          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <div className="handle">
                <img src="https://cdn-icons-png.flaticon.com/512/120/120324.png" width = "100px" height = "100px" draggable = {false} />
              </div>
            </div>
          </Draggable>


          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <div className="handle">
                <img src="https://cdn-icons-png.flaticon.com/512/4037/4037101.png" width = "100px" height = "100px" draggable = {false} />
              </div>
            </div>
          </Draggable>


          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <div className="handle">
                <img src="https://cdn-icons-png.flaticon.com/512/780/780500.png" width = "100px" height = "100px" draggable = {false} />
              </div>
            </div>
          </Draggable>

          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <div className="handle">
                <img src="https://cdn-icons-png.flaticon.com/512/883/883041.png" width = "100px" height = "100px" draggable = {false} />
              </div>
            </div>
          </Draggable>
          
          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <div className="handle">
                <img src="https://cdn-icons-png.flaticon.com/512/1758/1758497.png" width = "100px" height = "100px" draggable = {false} />
              </div>
            </div>
          </Draggable>


          <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            <div>
              <div className="handle">
                <img src="https://cdn-icons-png.flaticon.com/512/6323/6323810.png" width = "100px" height = "100px" draggable = {false} />
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}
