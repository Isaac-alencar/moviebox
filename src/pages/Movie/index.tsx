import { useHistory } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";

import { MovieBoxLogo } from "../../assets";

import * as S from "./styles";

export default function Movie() {
  const history = useHistory();

  return (
    <>
      <S.Header>
        <FiArrowLeft size={24} onClick={() => history.goBack()} />
        <MovieBoxLogo />
      </S.Header>

      <S.Main>
        <S.BackdropPoster
          src="https://image.tmdb.org/t/p/w500/oKIBhzZzDX07SoE2bOLhq2EE8rf.jpg"
          alt="Mr Robot"
        />

        <S.Details>
          <S.MoviePoster
            src="https://image.tmdb.org/t/p/w500/oKIBhzZzDX07SoE2bOLhq2EE8rf.jpg"
            alt="Mr Robot"
          />

          <div>
            <h4>Mr Robot</h4>
            <p>
              A contemporary and culturally resonant drama about a young
              programmer, Elliot, who suffers from a debilitating anti-social
              disorder and decides that he can only connect to people by hacking
              them. He wields his skills as a weapon to protect the people that
              he cares about. Elliot will find himself in the intersection
              between a cybersecurity firm he works for and the underworld
              organizations that are recruiting him to bring down corporate
              America.
            </p>

            <S.Rate>
              <AiFillStar size={24} />
              <span>10.0</span>
            </S.Rate>

            <S.TechnicalDetails>
              <span>
                Type
                <strong>Movie</strong>
              </span>
              <span>
                Release Date
                <strong>2015-06-24</strong>
              </span>
              <span>
                Run Time
                <strong>190 mins</strong>
              </span>
              <span>
                Genres
                <strong>Adventure, Science Fiction, Action</strong>
              </span>
            </S.TechnicalDetails>
          </div>
        </S.Details>
      </S.Main>
    </>
  );
}
