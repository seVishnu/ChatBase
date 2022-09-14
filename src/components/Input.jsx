import Img from '../img/img.png'
import Attach from '../img/attach.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={Attach} alt="attach" />
        <input type="file" style={{display: 'none'}} id='file' />
        <label htmlFor="file">
          <img src={Img} alt="demo" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input