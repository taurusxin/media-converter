import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'

import Index from '@/views/index/Index.vue'

import VideoTranscoding from '@/views/transcoding/VideoTranscoding.vue'
import AudioTranscoding from '@/views/transcoding/AudioTranscoding.vue'

import VideoMerge from '@/views/merge-split/VideoMerge.vue'
import VideoSplit from '@/views/merge-split/VidioSplit.vue'
import AudioMerge from '@/views/merge-split/AudioMerge.vue'
import AudioSplit from '@/views/merge-split/AudioSplit.vue'

import EmbedTitle from '@/views/title/EmbedTitle.vue'

import Setting from '@/views/setting/Setting.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Dashboard,
    children: [
      {
        path: '',
        component: Index
      }
    ]
  },
  {
    path: '/transcoding',
    name: 'Transcoding',
    component: Dashboard,
    children: [
      {
        path: '/video',
        name: 'VideoTranscoding',
        component: VideoTranscoding
      },
      {
        path: '/audio',
        name: 'AudioTranscoding',
        component: AudioTranscoding
      }
    ]
  },
  {
    path: '/merge-split',
    name: 'MergeSplit',
    component: Dashboard,
    children: [
      {
        path: '/video-merge',
        name: 'VideoMerge',
        component: VideoMerge
      },
      {
        path: '/video-split',
        name: 'VideoSplit',
        component: VideoSplit
      },
      {
        path: '/audio-merge',
        name: 'AudioMerge',
        component: AudioMerge
      },
      {
        path: '/audio-split',
        name: 'AudioSplit',
        component: AudioSplit
      }
    ]
  },
  {
    path: '/title',
    name: 'Title',
    component: Dashboard,
    children: [
      {
        path: '/embed-title',
        name: 'EmbedTitle',
        component: EmbedTitle
      }
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Dashboard,
    children: [
      {
        path: '',
        component: Setting
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
