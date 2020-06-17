import {View} from 'react-native';
import styled from 'styled-components';

interface GenresTabProps {
  height?: string;
  direction?: 'row' | 'column';
  padding?: string;
}

export const GenresTab = styled(View)<GenresTabProps>`
  height: ${(props) => props.height || '8%'};
  background-color: rgba(10, 10, 10, 0.75);
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: center;
`;
