interface EducationData {
    name: string
    imageUrl: string
    link: string
}

const EducationList = () => {
    const educationList: EducationData[] = [
        {name: 'HTML5', imageUrl: '', link: ''},
        {name: 'CSS', imageUrl: '', link: ''},
        {name: 'Javascript', imageUrl: '', link: ''},
        {name: 'Mobile Design', imageUrl: '', link: ''},
        {name: 'Git', imageUrl: '', link: ''},
        {name: 'Python Introduction', imageUrl: '', link: ''},
        {name: 'Python Data Structures', imageUrl: '', link: ''},
        {name: 'Python Databases', imageUrl: '', link: ''},
        {name: 'Python Web Data', imageUrl: '', link: ''},
        {name: 'Python Conclusion', imageUrl: '', link: ''},
    ]

    return (
        <div className="education-list-container">
            <ul className="education-list">
                {educationList.map((course, index) => 
                    <li className="course-details">
                        <a href={course.link}>
                            <img className="course-image" src={course.imageUrl} alt={'course'+' '+course.name} />
                            <p className="course-text">{course.name}</p>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default EducationList