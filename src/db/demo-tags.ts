import { Tag } from '../types/tag'
import randomColor from 'randomcolor'
import dayjs from 'dayjs'

export const tags: Tag[] = [
  {
    id: 'color',
    name: 'color',
    color: randomColor(),
    updateTime: dayjs().unix(),
    noteIds: ['1'],
  },
  {
    id: 'random',
    name: 'random',
    color: randomColor(),
    updateTime: dayjs().unix(),
    noteIds: ['1', '2']
  },
  {
    id: '标签1',
    name: '标签1',
    color: randomColor(),
    updateTime: dayjs().unix(),
    noteIds: ['1']
  },
  {
    id: '。标点',
    name: '。标点',
    color: randomColor(),
    updateTime: dayjs().unix(),
    noteIds: ['1']
  },
  {
    id: '.标点2',
    name: '.标点2',
    color: randomColor(),
    updateTime: dayjs().unix(),
    noteIds: ['1']
  },
  {
    id: '中文',
    name: '中文',
    color: randomColor(),
    updateTime: dayjs().unix(),
    noteIds: ['1']
  },
  {
    id: 'qwe中文+英文',
    name: 'qwe中文+英文',
    color: randomColor(),
    updateTime: dayjs().unix(),
    noteIds: ['1']
  },
  {
    id: '.letter',
    name: '.letter',
    color: randomColor(),
    updateTime: dayjs().unix(),
    noteIds: ['1']
  }
]