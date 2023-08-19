

const VideoCard = () => {
  return (
    <div className="videocard-body">
        <div className="video-thumnail"></div>

        <div className="video-info">
            <div className="video-title">
                Video Title
            </div>

            <div className="video-channel">
                <div className="channel-logo">

                </div>
                <div className="channel-name">
                    Channel Name
                </div>
            </div>

            <div className="card-footer">
                <div className="video-views">1M views</div>
                <div className="video-date">1y ago</div>
            </div>
        </div>

    </div>
  )
}

export default VideoCard