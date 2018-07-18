import React, { Component } from 'react';
import Icon from '../icons';
import Arrow from '../arrow';
import Action from '../action';
class LibraryCourse extends Component {
    render() {

        return (
            <div className="library-course">
           <div className="library-course__title-check">
            <label className="library-course__title">Problem Solving</label>
              { Icon('fas fa-check', 'library-course__icon') }
           </div>
           <arrow className="library-course__arrow"/>
          <Action className="library-course__action"/>
            <div className="library-course__discription">
            <label>Course description</label>
            <p>Let's make a happy little mountain now. Take your time. Speed will come later. You can create the world you want to see and be a part of. You have that power. Son of a gun. I thought today we would make a happy little stream that's just running through the woods here. You can do it.</p>
            </div>
            </div>
        )

    }
}
export default LibraryCourse;
