import React, { useEffect } from 'react';
import {
  Box, Button, CircularProgress,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';

import PictureContainer from './picture-container';
import { useRootSelector } from '../../store/hooks';
import {
  selectPortfolioPictures, selectPortfolioPicturesLoading, selectPortfolioError,
} from '../../store/selectors';
import { portfolioDeletePictureAction, portfolioFetchPicturesAction } from '../../store/action-creators';

const PortfolioPage: React.FC = () => {
  const pictures = useRootSelector(selectPortfolioPictures);
  const itemsLoading = useRootSelector(selectPortfolioPicturesLoading);
  const error = useRootSelector(selectPortfolioError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portfolioFetchPicturesAction);
  }, []);

  let pageContent = (
    <Box>
      <CircularProgress sx={{ color: 'primary.dark' }} size={60} />
    </Box>
  );

  if (!itemsLoading) {
    pageContent = (
      <PictureContainer>
        {
    pictures.map(({ id, ...picture }) => (
      <Box
        key={id}
        component="img"
        sx={{
          width: '300px',
          height: '300px',
          margin: '30px',
          position: 'relative',
        }}
      >
        <img
          src={picture.src}
          alt={picture.title}
          width="300px"
          height="300px"
        />
        <Button
          variant="text"
          sx={{
            position: 'absolute',
            top: '0px',
            right: '0px',
          }}
          onClick={() => dispatch(portfolioDeletePictureAction)}
        >
          <ClearIcon />
        </Button>
      </Box>
    ))
  }
      </PictureContainer>

    );
  }

  return pageContent;
};

export default PortfolioPage;
