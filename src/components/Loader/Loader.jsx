import { Load, LoaderBlock, LoaderText, LoaderWrapper } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderWrapper>
            <LoaderBlock>
    <LoaderText>loading</LoaderText>
      <Load></Load>
  </LoaderBlock>

  </LoaderWrapper>
    )
};
