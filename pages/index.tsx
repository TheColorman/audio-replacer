import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Popover from '@mui/material/Popover'

const Home: NextPage = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  return (
    <div className={styles.container}>
      <Head>
        <title>Video Audio Mixer</title>
        <meta name="description" content="Easily replace or add sound on a video" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Audio Video Mixer
        </h1>

        <p className={styles.description}>
          Add or replace audio on a video. <br />
          Get started by uploading a video or inserting a link.
        </p>

        <div className="flex flex-row">
          <div className={styles.uploadButton}>
            <label htmlFor="upload-video" className='hover:cursor-pointer inline-flex'>
              <span className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </span>
              Upload video
            </label>
            <input
              // Hide the file input, but remain accessible to screen readers and keyboard users
              className='absolute w-0 h-0'
              id="upload-video"
              type="file"
              accept="video/*"
            />
          </div>
          <div className='mx-2 flex items-center text-center'>
            <p className='text-lg text-slate-500'>or</p>
          </div>
          {/* URL input */}
          <div className='flex flex-col relative'>
            <div className={styles.urlInput}>
              <input
                className='focus:outline-none min-w-[20rem]'
                id="url-input"
                type="url"
                placeholder=" Enter URL (e.g. https://youtu.be/...)"
              />
            </div>
            <p className='absolute -bottom-4 left-1 text-xs text-blue-600 hover:underline hover:cursor-pointer'>
              <a
                aria-describedby='links-popover'
                onClick={handleClick}
              >Supported URLs</a>
              <Popover
                id='links-popover'
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <div className="p-3 pb-0">
                  <p className='text-base'>The following URLs are supported:</p>
                  <p className={styles.code + " text-sm"}>
                    youtu.be/ <br />
                    youtube.com/
                  </p>
                </div>
              </Popover>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
