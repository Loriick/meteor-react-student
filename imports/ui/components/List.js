import React from 'react';
import {Link} from 'react-router-dom';

const List = ({students , searchbar , deleteStudent}) => {

    let filteredStudent = students.map(student => {
        const {_id , data} = student;
        if (data.profile.name.toLowerCase().indexOf(searchbar) !== -1 || data.profile.firstname.toLowerCase().indexOf(searchbar) !== -1) {
            return(
                <li className="list-student" key={_id}>
                    <div className="list-student_container">
                        <img src="assets/img/student.svg" alt="student icon"/>
                        <Link to={`/student/${_id}`}>
                            {data.profile.firstname} {data.profile.name}
                        </Link>
                    </div>
                    <img src="assets/img/close.svg"  alt="delete" className="list-student_delete" onClick={() => deleteStudent(_id)}/>
                </li>
            )
         }
    })
    
    return(
        <div className="list">
        <ul>{filteredStudent}</ul>
        </div>
    )
}

export default List;