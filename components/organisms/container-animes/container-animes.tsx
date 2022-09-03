import { useContext, useEffect, useState } from 'react';
import {
    ContainerCards,
    RowCards,
    TableCards,
} from '@atoms';
import { Datum } from '@interfaces';
import { BoxImage } from '@components/molecules';
// import { BoxImage } from '@molecules';

interface ContainerAnimesProps {
    data: Datum[];
}

export const ContainerAnimes: React.FC<ContainerAnimesProps> = ({ data }) => {

    // const [load, setLoad]: [boolean, (arg: boolean) => void] =
    //     useState<boolean>(false);

    // const {
    //     valueSearch,
    //     isMobile,
    //     isShippingQuote,
    //     carrierData: { totalCarriers },
    // } = useContext(CarriersContext);

    // const handleFetching = (): void => {
    //     if (
    //         carrierslist.length !== totalCarriers.length &&
    //         isMobile &&
    //         valueSearch.length < 3
    //     ) {
    //         setLoad(true);
    //         setTimeout(() => {
    //             setCarriers(totalCarriers.slice(0, carrierslist.length + 5));
    //             setLoad(false);
    //         }, 1500);
    //     }
    // };

    // useNear({
    //     selector: '#fetch_carriers',
    //     callback: handleFetching,
    //     once: false,
    // });

    // const handleSetCarriers = () => {
    //     setCarriers(isMobile ? totalCarriers.slice(0, 4) : totalCarriers);
    // };

    // useEffect(() => {
    //     handleSetCarriers();
    //     // eslint-disable-next-line
    // }, [isMobile]);

    // useEffect(() => {
    //     valueSearch.length > 2
    //         ? setCarriers(
    //             totalCarriers.filter(({ name }: ICarriersType) =>
    //                 name.toLowerCase().includes(valueSearch.toLowerCase())
    //             )
    //         )
    //         : handleSetCarriers();
    //     // eslint-disable-next-line
    // }, [valueSearch]);

    return (
        <>
            <ContainerCards>
                <TableCards>
                    {data?.map((el: Datum, index: number) => (
                        <RowCards key={index}>
                            <BoxImage image_url={el.images.webp.image_url} anime_title={el.titles[0].title} />
                        </RowCards>
                    ))}
                </TableCards>
            </ContainerCards>
            <div id="fetch_carriers" />
            {/* {load && (
        <div style={{ alignSelf: 'center', marginBottom: '40px' }}>
          <CircularProgress />
        </div>
      )} */}
        </>
    );
};

export default ContainerAnimes;
