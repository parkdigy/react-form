import { appendFormValueData, getItemFormValue } from '../src/PForm/PForm.function.private';
import { type PFormValueItemCommands } from '../src/@types';

const commands = (value: { year: number; month: number } | null) =>
  ({
    getType: () => 'PFormEmbedMonthPicker',
    getValue: () => value,
    getReset: () => null,
    getFormValueYearName: () => 'period_y',
    getFormValueMonthName: () => 'period_m',
  }) as PFormValueItemCommands<any>;

describe('PFormEmbedMonthPicker 폼 값', () => {
  it('선택한 연도와 월을 지정한 필드 이름으로 제출한다', () => {
    const item = commands({ year: 2026, month: 2 });
    const data = {};
    appendFormValueData(data, item);
    expect(data).toEqual({ period_y: 2026, period_m: 2 });
  });

  it('값이 없거나 초기화할 때 빈 연도와 월을 사용한다', () => {
    expect(getItemFormValue(commands(null))).toEqual({ year: '', month: '' });
    expect(getItemFormValue(commands({ year: 2026, month: 2 }), true)).toEqual({ year: '', month: '' });
  });
});
