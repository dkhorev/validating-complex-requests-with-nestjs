import { Type } from 'class-transformer';
import { IsDate, Validate } from 'class-validator';
import { EndLaterThanStartRule } from '../../validation-rules/end-later-than-start.rule';

export class DateFilterDto {
  @Type(() => Date)
  @IsDate()
  start: Date;

  @Type(() => Date)
  @IsDate()
  @Validate(EndLaterThanStartRule)
  end: Date;
}
