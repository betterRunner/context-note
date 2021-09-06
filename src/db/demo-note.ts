import dayjs from 'dayjs'
import { Note } from '../types/note'

export const notes: Note[] = [
  {
    id: '1',
    createTime: dayjs().unix(),
    updateTime: dayjs().unix(),
    link: 'https://github.com/betterRunner',
    content: '1123123',
    tags: [
      'color',
      'random',
      '标签1',
      '。标点',
      '.标点2',
      '中文',
      'qwe中文+英文',
      '.letter'
    ],
    rects: [],
  },
  {
    id: '2',
    createTime: dayjs().unix(),
    updateTime: dayjs().unix(),
    link: 'https://github.com/betterRunner',
    content: '1123123',
    tags: ['random'],
    rects: [],
  },
  {
    id: '3',
    createTime: dayjs().unix(),
    updateTime: dayjs().unix(),
    link: 'https://github.com/betterRunner',
    content: '1123123',
    tags: [],
    rects: [],
  },
  {
    id: '4',
    createTime: dayjs().unix(),
    updateTime: dayjs().unix(),
    link: 'https://github.com/betterRunner',
    content: '1123123',
    tags: [],
    rects: [],
  },
  {
    id: '5',
    createTime: dayjs().unix(),
    updateTime: dayjs().unix(),
    link: 'https://github.com/betterRunner',
    content: '1123123',
    tags: [],
    rects: [],
  },
  {
    id: '6',
    createTime: dayjs().unix(),
    updateTime: dayjs().unix(),
    link: 'https://github.com/betterRunner',
    content: '1123123',
    tags: [],
    rects: [],
  }
]
