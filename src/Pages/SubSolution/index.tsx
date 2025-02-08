
import { useParams } from 'react-router-dom'
const index = () => {
    const { categoryName } = useParams();
    const category = categoryName?.split('').map((data)=> data === '-' ? ' ' : data).join('')
    const Capitalize = category?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return (
    <div>
        {Capitalize}
    </div>
  )
}

export default index
