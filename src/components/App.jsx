import './styles/App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPhotos } from '../redux/reducer/photosReducer';
import { errorSelector, loadingSelector, photosSelector } from '../redux/reducer/selectors';

function App() {

  const photos = useSelector(photosSelector)
  const loading = useSelector(loadingSelector)
  const error = useSelector(errorSelector)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos())
  }, [])


  const handleError = () => {
    dispatch(loadPhotos())
  }


  if (loading) {
    return (
      <div className='loading'>
        <h3 className='loading__title'>Загрузка...</h3>
      </div>
    )
  }

  if (error !== null) {
    return (
      <div className='error'>
        <h3 className='error__title'>Ошибка,брат...Ну как так?</h3>
        <button onClick={handleError}>update request</button>
      </div>
    )
  }

  return (

    <div>
      {photos.map((photo) => (

        <img src={photo.thumbnailUrl} key={photo.id} alt="" />


      ))}
    </div>
  )


}

export default App;
