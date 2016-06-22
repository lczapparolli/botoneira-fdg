var React    = require("react");
var ReactDOM = require("react-dom");
var App      = require("../js/app.js");
var remote = require('remote'); // Load remote compnent that contains the dialog dependency
var dialog = remote.require('dialog'); // Load the dialogs component of the OS
var app      = new App();

var Application = React.createClass({
  loadFiles: function () {
    var dir = dialog.showOpenDialog({properties: ['openDirectory']});
    console.log(dir);
    this.props.controller.loadFiles(dir[0], function (error, categories) {
      if (error) {
        console.log(error);
      } else {
        console.log(categories);
      }
    });
  },
  render: function() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper orange">
            <a href="#" className="left brand-logo hide-on-med-and-down">Botoneira FDG</a>
            <form className="right">
            </form>
            <ul className="right">
              <li><a onClick={this.loadFiles}><i className="material-icons">library_music</i></a></li>
              <li>
                <div className="input-field">
                  <input id="search" type="search" required />
                  <label htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s12 z-depth-1">Categoria 1</div>
          </div>
          <div className="row">
            <div className="col s12 z-depth-1">Categoria 2</div>
          </div>
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <Application controller={app} />,
  document.getElementById("window")
);
