export default [
  {
    name: 'first',
    children: [
      {
        name: 'first.1',
        nephews: [{ name: 'first.1.1' }, { name: 'first.1.2' }, { name: 'first.1.3' }],
      },
      {
        name: 'first.2',
        nephews: [{ name: 'first.2.1' }, { name: 'first.2.2' }, { name: 'first.2.3' }],
      },
      {
        name: 'first.3',
        nephews: [{ name: 'first.3.1' }, { name: 'first.3.2' }, { name: 'first.3.3' }],
      },
    ],
  },
  {
    name: 'second',
    children: [
      {
        name: 'second.1',
        nephews: [{ name: 'second.1.1' }, { name: 'second.1.2' }, { name: 'second.1.3' }],
      },
      {
        name: 'second.2',
        nephews: [{ name: 'second.2.1' }, { name: 'second.2.2' }, { name: 'second.2.3' }],
      },
      {
        name: 'second.3',
        nephews: [{ name: 'second.3.1' }, { name: 'second.3.2' }, { name: 'second.3.3' }],
      },
    ],
  },
  {
    name: 'third',
    children: [
      {
        name: 'third.1',
        nephews: [{ name: 'third.1.1' }, { name: 'third.1.2' }, { name: 'third.1.3' }],
      },
      {
        name: 'third.2',
        nephews: [{ name: 'third.2.1' }, { name: 'third.2.2' }, { name: 'third.2.2' }],
      },
      {
        name: 'third.3',
        nephews: [{ name: 'third.3.1' }, { name: 'third.3.2' }, { name: 'third.3.3' }],
      },
    ],
  },
];
