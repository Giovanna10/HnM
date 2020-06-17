import {GenresTab} from './headerStyles';
import React from 'react';

interface ScreenHeaderProps {
  children: React.ReactNode;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({children}) => {
  return <GenresTab>{children}</GenresTab>;
};

export default ScreenHeader;
