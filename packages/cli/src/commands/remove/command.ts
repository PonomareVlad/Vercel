import { Command } from '../help';
import { getPkgName } from '../../util/pkg-name';

export const removeCommand: Command = {
  name: 'remove',
  description: 'Remove a deployment by name or id.',
  arguments: [
    {
      name: '...deploymentId|deploymentName',
      required: true,
    },
  ],
  options: [
    {
      name: 'yes',
      shorthand: 'y',
      type: 'boolean',
      deprecated: false,
      description: 'Skip confirmation',
      multi: false,
    },
    {
      name: 'safe',
      shorthand: 's',
      type: 'boolean',
      deprecated: false,
      description: 'Skip deployments with an active alias',
      multi: false,
    },
  ],
  examples: [
    {
      name: 'Remove a deployment identified by `deploymentId`',
      value: `${getPkgName()} remove my-app`,
    },
    {
      name: 'Remove all deployments with name `my-app`',
      value: `${getPkgName()} remove deploymentId`,
    },
    {
      name: 'Remove two deployments with IDs `eyWt6zuSdeus` and `uWHoA9RQ1d1o`',
      value: `${getPkgName()} remove eyWt6zuSdeus uWHoA9RQ1d1o`,
    },
  ],
};
