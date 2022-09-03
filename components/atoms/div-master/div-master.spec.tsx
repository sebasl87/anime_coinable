import { render } from '@testing-library/react';
import DivMaster from './div-master';

describe('DivMaster', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DivMaster />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully  ', () => {
    const { baseElement } = render(
      <DivMaster
        overflowX="hidden"
        position="fixed"
        top="1px"
        right="1px"
        bottom="1px"
        left="1px"
        display="flex"
        margin="10px"
        boxShadow="0 0 10px black"
        overflow="hidden"
        alignItems="center"
        alignContent="center"
        width="100%"
        borderRadius={6}
        textAlign="center"
        rowGap={10}
        columnGap={10}
        whiteSpace="nowrap"
        mb={10}
        mx={10}
        my={10}
        py={10}
        px={10}
        mr={10}
        ml={10}
        mt={10}
        pt={10}
        pb={10}
        pr={10}
        pl={10}
        padding="8px"
        zIndex={3}
        height="auto"
        border="2px"
        order={1}
        opacityHover={2}
        boxShadowHover="2 2 2 2"
        cursor="pointer"
        flexWrap="wrap"
        opacity={1}
        br="10px 8px 5px 10px"
        transition="all 0.5s ease"
        gridTemplateRows="5rem"
        gridTemplateColumns="5rem"
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render successfully mb md ll', () => {
    const { baseElement } = render(
      <DivMaster
        scrollDesignDisable
        overflowX={{ sm: 'hidden', md: 'hidden', ll: 'hidden', lg: 'hidden' }}
        transition={{
          sm: 'all 0.5s ease',
          md: 'all 0.5s ease',
          ll: 'all 0.5s ease',
          lg: 'all 0.5s ease',
        }}
        top={{ sm: '1px', md: '1px', ll: '1px', lg: '1px' }}
        right={{ sm: '1px', md: '1px', ll: '1px', lg: '1px' }}
        bottom={{ sm: '1px', md: '1px', ll: '1px', lg: '1px' }}
        left={{ sm: '1px', md: '1px', ll: '1px', lg: '1px' }}
        flexWrap={{ md: 'wrap', sm: 'wrap', ll: 'wrap', lg: 'wrap' }}
        opacity={{ md: 1, sm: 1, ll: 1, lg: 2 }}
        mb={{ md: 10, sm: 10, ll: 10, lg: 3 }}
        mr={{ md: 10, sm: 10, ll: 10, lg: 3 }}
        mt={{ md: 10, sm: 10, ll: 10, lg: 3 }}
        ml={{ md: 10, sm: 10, ll: 10, lg: 3 }}
        pb={{ md: 10, sm: 10, ll: 10, lg: 3 }}
        pr={{ md: 10, sm: 10, ll: 10, lg: 3 }}
        pt={{ md: 10, sm: 10, ll: 10, lg: 3 }}
        pl={{ md: 10, sm: 10, ll: 10, lg: 3 }}
        columnGap={{ md: 10, sm: 10, ll: 10, lg: 1 }}
        rowGap={{ md: 10, sm: 10, ll: 10, lg: 10 }}
        position={{ md: 'fixed', ll: 'fixed', sm: 'relative', lg: 'relative' }}
        padding={{ md: '10px', sm: '10px', ll: '10px' }}
        margin={{ md: '10px', sm: '10px', ll: '10px', lg: '10px' }}
        minWidth={{ md: '100px', sm: '100px', ll: '100px', lg: '10px' }}
        display={{ md: 'flex', sm: 'block', ll: 'block', lg: 'block' }}
        flexDirection={{ md: 'column', sm: 'row', ll: 'column', lg: 'column' }}
        justifyContent={{
          md: 'center',
          sm: 'center',
          ll: 'center',
          lg: 'center',
        }}
        alignItems={{ md: 'center', sm: 'center', ll: 'center', lg: 'center' }}
        alignContent={{
          md: 'center',
          sm: 'center',
          ll: 'center',
          lg: 'center',
        }}
        width={{ md: '100px', sm: '100%', ll: '100%', lg: '100%' }}
        maxWidth={{ md: '100px', sm: '100%', ll: '100%', lg: '100%' }}
        overflow={{ md: '100px', sm: '100%', ll: '100%', lg: '100%' }}
        borderRadius={{ md: 4, sm: 4, ll: 4, lg: 5 }}
        my={{ md: 5, sm: 5, ll: 5, lg: 3 }}
        mx={{ md: 5, sm: 5, ll: 5, lg: 3 }}
        py={{ md: 5, sm: 5, ll: 5, lg: 3 }}
        px={{ md: 5, sm: 5, ll: 5, lg: 3 }}
        boxShadow={{
          md: '5px 5px 5px black',
          sm: '5px 5px 5px black',
          ll: '5px 5px 5px black',
          lg: '5px 5px 5px black',
        }}
        zIndex={{ md: 5, sm: 5, ll: 5, lg: 5 }}
        whiteSpace={{ md: 'noWrap', sm: 'noWrap', ll: 'noWrap', lg: 'noWrap' }}
        height={{ md: 'auto', sm: 'auto', ll: 'auto', lg: 'auto' }}
        border={{
          sm: '2px solid blue',
          md: '2px solid blue',
          ll: '2px solid blue',
          lg: '2px solid blue',
        }}
        order={{ sm: 1, md: 2, ll: 3, lg: 3 }}
        br={{ sm: '10px', md: '10px', ll: '10px', lg: '10px' }}
        gridTemplateColumns={{ sm: '5rem', md: '5rem', ll: '5rem', lg: '5rem' }}
        gridTemplateRows={{ sm: '5rem', md: '5rem', ll: '5rem', lg: '5rem' }}
        gap={{ sm: '5rem', md: '5rem', ll: '5rem', lg: '5rem' }}
        textAlign={{ lg: 'center' }}
        minHeight={{ lg: '10px' }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
