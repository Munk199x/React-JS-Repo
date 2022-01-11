function App() {

  let audio = new Audio("/ringtone.mp3")

  function ring () {
    audio.play()
  }

  function vibrate (ms) {
    navigator.vibrate([1000,200,800,400]);
  }
  function net(){
    var connection = navigator.connection.type;
    window.alert("The connection type is " + connection);
    console.log(connection);
  }
  return (
    <div className="App">
      
      <button type="button" className="btn shadow-md btn-primary center" data-toggle="modal" data-target="#exampleModal">
        Start Application
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Ring or Vibrate</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Please select an option
            </div>
            <div className="modal-footer">
              <button type="button" onClick={ring} className="btn btn-warning">Ring</button>
              <button type="button" onClick={vibrate} className="btn btn-success">Vibrate</button>
              <button type="button" onClick={net} className="btn btn-success">Network status</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;