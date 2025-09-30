import { ExpertiseAreaSchema } from '@data/schema/expertise-area.schema';
import { site, api, mobile, monitor, speed, search } from '@icon/regular.icon';

const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    // percent: '90%',
    name: 'Frontend ',
  },
  {
    icon: api,
    // percent: '60%',
    name: 'API Development',
  },
  {
    icon: mobile,
    // percent: '80%',
    name: 'Backend Development',
  },

  {
    icon: speed,
    // percent: '75%',
    name: 'Performance Optimization',
  },
  {
    icon: search,
    // percent: '20%',
    name: 'Unit Testing',
  },
  {
    icon: monitor,
    // percent: '70%',
    name: 'Database',
  },
];

export default expertiseAreaData;
