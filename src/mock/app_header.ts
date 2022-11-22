export interface IAppNavigation {
  name: string;
  slug?: string;
  lists?: INavigation[];
}

export interface INavigation {
  slug: string;
  name: string;
}

export const AppNavigation: IAppNavigation[] = [
  {
    name: 'category',
    slug: 'courses',
    lists: [
      { name: 'Development', slug: 'development' },
      { name: 'Business', slug: 'business' },
      { name: 'Finance and accounting', slug: 'finance_and_accounting' },
      { name: 'IT & software', slug: 'it_&_software' },
      { name: 'Office Productivity', slug: 'office_productivity' },
      { name: 'Personal development', slug: 'Personal development' },
      { name: 'Design', slug: 'design' },
      { name: 'Marketing', slug: 'marketing' },
      { name: 'Lifestyle', slug: 'lifestyle' },
      { name: 'Photography', slug: 'photography' },
      { name: 'Health & Fitness', slug: 'health_&_fitness' },
      { name: 'Music', slug: 'music' },
      { name: 'Teaching & Academics', slug: 'teaching_&_academics' }
    ]
  },
  {
    name: 'instructor'
  }
];
