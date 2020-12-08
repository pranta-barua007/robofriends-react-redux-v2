import React, { Component} from 'react';

import { connect } from 'react-redux';
import { requestRobotsData } from '../redux/requestRobots/requestRobots.actions';

import {createStructuredSelector} from 'reselect';
import {selectSearchField} from '../redux/searchField/searchField.selectors';
import {selectRobotsPending, selectRobotsSuccess} from '../redux/requestRobots/requestRobots.selectors';

import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';



class App extends Component {
  
    componentDidMount(){
        this.props.onRequestRobots();
    }


    render () {
        const { searchField, isPending, robotsData } = this.props;
        const filteredRobots = robotsData.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
            <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>robo friends</h1>
                <SearchBox/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}


//standard way

// const mapStateToProps = state => {
//     return {
//         searchField: state.search.searchField
//     }
// };



// with reselect library
const mapStateToProps = createStructuredSelector(
    {
        searchField: selectSearchField,
        isPending : selectRobotsPending,
        robotsData: selectRobotsSuccess
    }
);

const mapDispatchToProps = dispatch => {
    return {
        onRequestRobots: () => dispatch(requestRobotsData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);