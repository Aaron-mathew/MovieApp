import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } =useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie())
    };

  }, []);
  return info ? (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path })`, 
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
                }}  className='w-screen h-screen px-[10%]'>
      {/* Part1 navigation */}
      <nav className='h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl'>
        <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></Link> 
        <a target="_blank" href={info.detail.homepage}><i className ="ri-external-link-fill"></i></a>
        <a target="_blank"  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className ="ri-earth-fill"></i></a>
        <a target="_blank"  href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
      </nav>
      {/* Part2 Poster and details */}
      <div className='w-full flex'>
                <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${ info.detail.poster_path || info.detail.backdrop_path }`} alt="" />
                <div>
                  {info.watchproviders && info.watchproviders.flatrate && info.watchproviders.flatrate.map(w => <img src={`https://image.tmdb.org/t/p/original/${ w.logo_path }`} alt="" /> )}
                </div>
      </div>
    </div>
  ): <Loading /> 
}

export default MovieDetails


// {1:10:59} 3rd Video