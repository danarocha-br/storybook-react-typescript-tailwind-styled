import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

export const Container = styled.button`
  ${tw`text-white text-base font-bold text-center bg-indigo-700 rounded-full flex py-4 px-10 focus:outline-none cursor-pointer`}

  &:disabled {
    ${tw`opacity-75 cursor-not-allowed`}
  }

  &:hover:not(:disabled) {
    ${tw`bg-indigo-800 border-transparent shadow-xs`}
  }

  &:active:not(:disabled) {
    ${tw`bg-indigo-900 border-transparent shadow-xs`}
  }
`;
