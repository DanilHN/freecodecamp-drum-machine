class MyApp extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const drum = [{
            keyTrigger: "Q",
            id: "Heater-1",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        }, {
            keyTrigger: "W",
            id: "Heater-2",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        }, {
            keyTrigger: "E",
            id: "Heater-3",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        }, {
            keyTrigger: "A",
            id: "Heater-4",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        }, {
            keyTrigger: "S",
            id: "Clap",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        }, {
            keyTrigger: "D",
            id: "Open-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        }, {
            keyTrigger: "Z",
            id: "Kick-n'-Hat",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        }, {
            keyTrigger: "X",
            id: "Kick",
            url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        }, {
            keyTrigger: "C",
            id: "Closed-HH",
            url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }]

        function pressKey(id) {
            document.addEventListener('keydown', (event) => {
                for (let i = 0; i < drum.length; i++) {
                    if (event.key.toUpperCase() == drum[i].keyTrigger) {
                        handleClick(drum[i].keyTrigger, id)
                    }
                }
            })
        }

        function handleClick(selector, id) {
            document.getElementById(selector).play()
            document.getElementById('display').innerText = id
        }

        return (<div id='drum-machine'
            className='h-100 w-100 d-flex justify-content-center align-items-center' >
            <div id='d-m-container'
                className='row h-50 w-75 align-items-center' >
                <div id='buttons'
                    className='col-6 h-100 d-flex flex-column justify-content-around' >
                    <div className='row h-75 justify-content-between' > {
                        drum.map(a =>
                            <button id={a.id}
                                className='btn btn-danger m-1 col-3 drum-pad'
                                onClick={
                                    () => {
                                        handleClick(a.keyTrigger, a.id);
                                        pressKey(a.id)
                                    }} > {a.keyTrigger} <audio id={a.keyTrigger} className='clip'
                                        src={a.url}
                                        type='audio/mpeg' > </audio> </button>
                        )
                    }
                    </div>
                </div>
                <div id='control-panel'
                    className='col-6 h-100 d-flex flex-column justify-content-evenly' >

                    <div id='display'
                        className='d-flex justify-content-center' > Do you want to play ? </div>


                </div> </div> </div>


        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById('app'))