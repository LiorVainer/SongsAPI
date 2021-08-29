import { app } from '../app';
import chalk from 'chalk';
import { RequestHandler } from 'express';
import morgan from 'morgan';

export default morgan((tokens, req, res) => {
  const Status = {
    OK: '2',
    FINE: '3',
    BAD: '4',
    VERY_BAD: '5',
  };

  let currentStatus = tokens.status(req, res)?.toString().charAt(0);
  console.log(currentStatus);

  let reqMethodAndStatus;
  switch (currentStatus) {
    case Status.OK:
      reqMethodAndStatus = chalk.bold.green(
        `${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens.status(req, res)}`
      );
      break;

    case Status.FINE:
      reqMethodAndStatus = chalk.bold.yellow(
        `${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens.status(req, res)}`
      );
      break;

    case Status.BAD:
    case Status.VERY_BAD:
      reqMethodAndStatus = chalk.bold.red(
        `${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens.status(req, res)}`
      );
      break;

    default:
      reqMethodAndStatus = chalk.bold.white(`${tokens.method(req, res)} ${tokens.url(req, res)}`);
      break;
  }

  return [
    '\n',
    chalk.bgBlackBright.bold('[LOGGER]'),
    reqMethodAndStatus,
    chalk.green.white(`${tokens['response-time'](req, res)} ms @ ${tokens.date(req, res)}`),
    chalk.cyan(tokens['user-agent'](req, res)),
  ].join(' ');
});
