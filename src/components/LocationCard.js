import React from 'react';
import {Link} from 'react-router-dom';
class LocationCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div>
          <div className="card white" style={{'padding': '0px','margin': '10px'}}>
            <div className="card-content black-text" >
              <div className="row" style={{'marginBottom': '10px'}}>
                <span className="col s10 l3" style={styles.address}>{this.props.location.address}</span>
                <span className="col s10 l4" style={styles.town}>{this.props.location.city}</span>
              </div>
              <div className="row" style={{'marginBottom': '10px'}}>
                <span className="col s10 l3" style={styles.size}>{this.props.location.size}</span>
                <span className="col s10 l4" style={styles.rate}>{this.props.location.price}</span>
              </div>
              <div className="row" style={{'marginBottom': '0px'}}>
                <div className="col s9">
                  <img className="responsive-img" src={require('../assets/storefronts/'+this.props.location.images+'.png')}/>
                  {/*smalll  screen button*/}
                    <div className="col s10 m10 hide-on-large-only" style={styles.cardButtonsMediumSmall}>
                      <div className="row" style={{'marginBottom': '10px'}}>
                        <Link to={{
                          pathname: '/site_information',
                          state: {
                            location: this.props.location
                          }
                        }}><input className = "col s10" type="submit" value="View" style={styles.viewBtn} /></Link>
                      </div>
                      <div className="row" style={{'marginBottom': '0px'}}>
                        <Link to={{
                          pathname: '/booking',
                          state: {
                            location: this.props.location
                          }
                        }}><input className = "col s10" type="submit" value="Book" style={styles.bookBtn} /></Link>
                      </div>
                    </div>
                </div>

                {/*large  screen button*/}
                <div className="col l3 hide-on-med-and-down" style={styles.cardButtonsLarge}>
                  <div className="row" style={{'marginBottom': '10px'}}>
                    <Link to={{
                      pathname: '/site_information',
                      state: {
                        location: this.props.location
                      }
                    }}><input className = "col s10" type="submit" value="View" style={styles.viewBtn} /></Link>
                  </div>
                  <div className="row" style={{'marginBottom': '0px'}}>
                    <Link to={{
                      pathname: '/booking',
                      state: {
                        location: this.props.location
                      }
                    }}><input className = "col s10" type="submit" value="Book" style={styles.bookBtn} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  address: {
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 0
  },
  town: {
    fontStyle: 'italic',
    color: '#747474',
    textAlign: 'left',
    padding: 0
  },
  size: {
    textAlign: 'left',
    padding: 0
  },
  rate: {
    textAlign: 'left',
    color: '#0393DB',
    padding: 0
  },
  viewBtn: {
    backgroundColor: '#10a96d',
    color: 'white',
    borderRadius: 10,
    height: 30,
    fontSize: '12px',
  },
  bookBtn: {
    backgroundColor: '#0393DB',
    color: 'white',
    borderRadius: 10,
    height: 30,
    fontSize: '12px',
  },
  cardButtonsLarge: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // padding: '0px',
    paddingTop: '130px'
  },
  cardButtonsMediumSmall: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingLeft: '20px',
  }
}

export default LocationCard
