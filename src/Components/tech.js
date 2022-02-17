
  const Tech = ({ project }) => {
    return project.tag.map((url,i) => (
      <div key={i}>
         
        <img src={process.env.PUBLIC_URL +url} />
        
      </div>
    ));
  }
export default Tech;