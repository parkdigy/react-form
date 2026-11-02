import dayjs from 'dayjs';
import { appendFormValueData } from '../src/PForm/PForm.function.private';
import { type PFormValueItemCommands, type PFormValueMap } from '../src/@types';

describe('임베드 날짜 및 범위 선택기 폼 제출', () => {
  const item = (type: string, value: unknown) =>
    ({
      getType: () => type,
      getName: () => 'period',
      getValue: () => value,
      getFormValueFormat: () => 'YYYY-MM-DD HH:mm',
      getFormValueFromName: () => 'period_from',
      getFormValueToName: () => 'period_to',
      getFormValueFromYearName: () => 'from_year',
      getFormValueFromMonthName: () => 'from_month',
      getFormValueToYearName: () => 'to_year',
      getFormValueToMonthName: () => 'to_month',
    }) as PFormValueItemCommands<any>;

  it.each(['PFormEmbedDatePicker', 'PFormEmbedDateTimePicker', 'PFormEmbedTimePicker'])(
    '%s 값을 지정한 형식으로 제출한다',
    (type) => {
      const data: PFormValueMap = {};
      appendFormValueData(data, item(type, dayjs('2026-02-03 14:25')));
      expect(data).toEqual({ period: '2026-02-03 14:25' });
    }
  );

  it('날짜 범위와 연도 범위를 시작과 종료 필드로 제출한다', () => {
    const data: PFormValueMap = {};
    appendFormValueData(data, item('PFormEmbedDateRangePicker', [dayjs('2026-02-03'), null]));
    expect(data).toEqual({ period_from: '2026-02-03 00:00', period_to: '' });
    appendFormValueData(data, item('PFormEmbedYearRangePicker', [2024, 2026]));
    expect(data).toEqual({ period_from: 2024, period_to: 2026 });
  });

  it('월 범위를 네 개의 연도와 월 필드로 제출한다', () => {
    const data: PFormValueMap = {};
    appendFormValueData(data, item('PFormEmbedMonthRangePicker', [{ year: 2025, month: 3 }, null]));
    expect(data).toEqual({ from_year: 2025, from_month: 3, to_year: '', to_month: '' });
  });

  it('연도를 원래 값으로 제출한다', () => {
    const data: PFormValueMap = {};
    appendFormValueData(data, item('PFormEmbedYearPicker', 2026));
    expect(data).toEqual({ period: 2026 });
  });
});
