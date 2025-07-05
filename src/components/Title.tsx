const Title = ({content} : {content : string}) => {
  return (
     <div className="p-4 border">
             <h3 className = "text-lg">{content}</h3>
    </div>
  )
}

export default Title