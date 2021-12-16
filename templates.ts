export interface Template {
  name: string;
  description: string;
  remote: string;
  branch: string;
  network: string;
  specVersion: string;
}

export let templates = [
  {
    name: 'subql-starter',
    description: 'Starter project for subquery',
    remote: 'https://github.com/subquery/subql-starter/',
    branch: 'v0.2.0',
    network: 'Polkadot',
    specVersion: '0.2.0',
  },
  {
    name: 'moonriver-evm-starter',
    description: 'Moonriver EVM project template tutorial',
    remote: 'https://github.com/subquery/tutorials-moonriver-evm-starter',
    branch: 'master',
    network: 'Moonbeam',
    specVersion: '0.2.0',
  },
];
