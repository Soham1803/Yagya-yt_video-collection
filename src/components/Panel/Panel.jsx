import VideoCard from './VideoCard';
import './panel.css'
import PropTypes from 'prop-types';

const Panel = ({expand}) => {
  return (
    <div className={expand? "panel-body-contract": "panel-body"} >
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}

Panel.propTypes = { 
  expand: PropTypes.bool,
};

export default Panel