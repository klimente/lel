const React = require('react');


function Select(props) {
    const lanes = ['Top','Jgl','Mid','Adc','Sup']
    return ( <ul className='lanes'>
        {lanes.map(function (lane) {
        return (
        <li
          style={lane === props.selectedLane ? {color: '#d0021b'} : null}
          onClick={props.onSelect.bind(null, lane)}
          key={lane}>
            {lane}
        </li>
      )
    })}
  </ul>)
}

class Soloq_experts extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLane: 'Top'
        }
        this.updateLane = this.updateLane.bind(this);
    }

    updateLane(lane) {
        this.setState(function () {
          return {
            selectedLane: lane,
          }
        });
      }
    
      render() {
        return (
          <div>
            <Select
              selectedLane={this.state.selectedLane}
              onSelect={this.updateLane} />
           
          </div>
        )
      }

}
module.exports = Soloq_experts;