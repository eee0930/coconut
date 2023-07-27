import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ITrackInfo } from '../atoms';

// apis
import { ITopChart, ITrack, fetchTopTracks } from '../apis/deezerMusicApi';

// services
import { getTopTrackList } from '../services/MusicServiceImpl';

// components
import Musics from './mixins/Musics';

// styles
import { Loader } from '../utils/globalStyles';
import { useEffect, useState } from 'react';

function ListTopTrack() {
  const { data, isLoading } = useQuery<ITopChart>('topChart', fetchTopTracks, {
    retry: 0,
  });

  const [topTracks, setTopTracks] = useState<ITrackInfo[]>();
  // let topTracks;

  useEffect(() => {
    settingTopTrackList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const settingTopTrackList = () => {
    if (!isLoading) {
      const trackList = getTopTrackList(
        data?.tracks.data as ITrack[]
      ) as ITrackInfo[];
      setTopTracks(trackList);
    }
  };

  return (
    <>
      <h2 className="title">
        <Link to="/chart#track">
          <span>today's top 10</span>
          <i className="fa-solid fa-caret-right fa-fw" />
        </Link>
      </h2>
      {isLoading ? (
        <Loader>
          <div>
            <div></div>
            <div></div>
          </div>
        </Loader>
      ) : (
        <>
          <div className="row">
            <div className="col-12 col-md-6">
              {topTracks?.slice(0, 5).map((track) => (
                <Musics
                  track={track}
                  check={false}
                  allChecked={false}
                  key={track.tid}
                />
              ))}
            </div>
            <div className="col-12 col-md-6">
              {topTracks?.slice(5).map((track) => (
                <Musics
                  track={track}
                  check={false}
                  allChecked={false}
                  key={track.tid}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ListTopTrack;
