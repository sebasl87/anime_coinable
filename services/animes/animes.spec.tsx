/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchAnimes } from './index';

describe('Quote', () => {
  const mockQuery = {
    zip_from: '029s00',
    zip_to: '44s100',
    parcel: {
      weight: '1',
      height: '10',
      width: '10',
      length: '10',
    },
  };

  const mockDataLabels = [
    {
      amount_local: '83.0',
      currency_local: 'MXN',
      provider: 'VENCEDOR',
      service_level_name: 'Standard',
      service_level_code: 'STANDARD',
      days: 6,
      insurable: false,
      out_of_area_service: false,
      out_of_area_pricing: 0,
      total_pricing: '83.0',
      is_ocurre: false,
    },
    {
      amount_local: '129.0',
      currency_local: 'MXN',
      provider: 'NINETYNINEMINUTES',
      service_level_name: 'Mismo día',
      service_level_code: 'sameDay',
      days: 1,
      insurable: true,
      out_of_area_service: false,
      out_of_area_pricing: 0,
      total_pricing: '129.0',
      is_ocurre: false,
    },
    {
      amount_local: '129.0',
      currency_local: 'MXN',
      provider: 'NINETYNINEMINUTES',
      service_level_name: 'Día siguiente',
      service_level_code: 'nextDay',
      days: 2,
      insurable: true,
      out_of_area_service: false,
      out_of_area_pricing: 0,
      total_pricing: '129.0',
      is_ocurre: false,
    },
  ];

  const mockErrorFetch = {
    zip_from: ['es inválido', 'es demasiado largo (máximo 5 caracteres)'],
    zip_to: ['es inválido', 'es demasiado largo (máximo 5 caracteres)'],
  };
  afterEach(() => jest.clearAllMocks());

  it('Fetch  Quote success', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockDataLabels),
      })
    );

    const result = await fetchAnimes(mockQuery);

    await expect(result).toEqual(mockDataLabels);
  });

  it('Fetch  Quote Errpr', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockErrorFetch),
      })
    );

    const result = await fetchAnimes(mockQuery);

    await expect(result).toEqual(mockErrorFetch);
  });
});
