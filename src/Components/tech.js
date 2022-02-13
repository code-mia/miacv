
  const Tech = ({ project }) => {
    return project.tag.map((url,i) => (
      <div key={i}>
         
        <img src={url} />
        
      </div>
    ));
  }
export default Tech;