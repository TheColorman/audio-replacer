import React, { ChangeEvent, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Popover from '@mui/material/Popover'
import LinearProgress from '@mui/material/LinearProgress'
import NoSsr from '@mui/material/NoSsr'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import { useRouter } from 'next/router'

const Title = () => (
  <>
    <h1 className={styles.title}>
      Audio Video Mixer
    </h1>
  </>
)

const Home: NextPage = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [video, setVideo] = React.useState<File | null>(null)
  const [audio, setAudio] = React.useState<File | null>(null)
  const router = useRouter()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleReload = () => {
    router.reload()
  }

  const uploadVideoToClient = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0]

      setVideo(i)
    }
  }
  const uploadAudioToClient = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0]

      setAudio(i)
    }
  }

  const Progress = () => {
    return (
      <div className='min-w-fit flex mt-8 items-center'>
        {/* Image (video) */}
        {video && (
          <div className='bg-gray-500 w-48 aspect-video relative'>
            <div className="w-full h-8 bg-black/80 bottom-0 absolute">
              <p className="text-sm text-white p-1">
                {video.name}
              </p>
            </div>
          </div>
        )}
        {/* Plus */}
        {audio && (
          <>
            <h1 className='text-8xl'>
              +
            </h1>
            {/* Image (audio) */}
            <div className='bg-gray-500 w-48 aspect-video relative'>
              <div className="w-full h-8 bg-black/80 bottom-0 absolute">
                <p className="text-sm text-white p-1">
                  {audio.name}
                </p>
              </div>
            </div>
          </>
        )}
        {/* Equals */}
        {video && audio && (
          <>
            <h1 className='text-8xl'>
              =
            </h1>
            {/* Image (output) */}
            <div className='bg-gray-500 w-48 aspect-video relative'>
              <div className="w-full h-8 bg-black/80 bottom-0 absolute">
                <p className="text-sm text-white p-1">
                  Output video
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  const StepOne = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    const open = Boolean(anchorEl)

    return (
      <>
        <p className={styles.description}>
          Add or replace audio on a video. <br />
          Get started by uploading a video or inserting a link.
        </p>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className={`${styles.buttonPrimary} relative`}>
              <p className='absolute left-1/2 -translate-x-1/2 -top-5 text-sm text-black align-text-bottom w-screen'>
                {video ? video.name : ''}
              </p>
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
                onChange={uploadVideoToClient}
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
                <NoSsr>
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
                </NoSsr>
              </p>
            </div>
          </div>
          <div className="flex mt-6 w-full space-x-4">
            <button className={`${styles.buttonSecondaryDisabled} w-full`}>
              Back
            </button>
            {video ? (
              <button className={`${styles.buttonPrimary} w-full`} onClick={handleNext}>
                Continue
              </button>
            ) : (
              <button className={`${styles.buttonPrimaryDisabled} w-full`}>
                Continue
              </button>
            )}
          </div>
        </div>

        <Progress />
      </>
    )
  }
  const StepTwo = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    const open = Boolean(anchorEl)

    return (
      <>
        <p className={styles.description}>
          Upload a video, audio or insert a link. <br />
          This will be used as the audio source.
        </p>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className={styles.buttonPrimary}>
              <p className="absolute left-1/2 -translate-x-1/2 -top-5 text-sm text-black align-text-bottom w-screen">
                {audio ? audio.name : ''}
              </p>
              <label htmlFor="upload-video" className='hover:cursor-pointer inline-flex'>
                <span className="mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </span>
                Upload video/audio
              </label>
              <input
                // Hide the file input, but remain accessible to screen readers and keyboard users
                className='absolute w-0 h-0'
                id="upload-video"
                type="file"
                accept="video/*, audio/*"
                onChange={uploadAudioToClient}
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
                <NoSsr>
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
                </NoSsr>
              </p>
            </div>
          </div>
          <div className="flex mt-6 w-full space-x-4">
            <button className={`${styles.buttonSecondary} w-full`} onClick={handleBack}>
              Back
            </button>
            {audio ? (
              <button className={`${styles.buttonPrimary} w-full`} onClick={handleNext}>
                Continue
              </button>
            ) : (
              <button className={`${styles.buttonPrimaryDisabled} w-full`}>
                Continue
              </button>
            )}
          </div>
        </div>
        <Progress />
      </>
    )
  }
  const StepThree = () => {
    const [progress, setProgress] = React.useState(0)
    const [progressText, setProgressText] = React.useState<string[]>([])
    const [outputURL, setOutputURL] = React.useState('')
    const [complete, setComplete] = React.useState(false)
    const [timerComplete, setTimerComplete] = React.useState(false)

    const convertVideo = async () => {
      if (video === null || audio === null) {
        return "error"
      }
      const ffmpeg = createFFmpeg({
        corePath: '/ffmpeg/ffmpeg-core.js',
        log: true,
      })
      setProgressText(progressText.concat(['Loading ffmpeg...']))
      await ffmpeg.load()
      ffmpeg.setProgress(({ ratio }) => {
        setProgress(ratio > 1 ? ratio : ratio * 100)
      })
      setProgressText(progressText.concat('Writing video input...'))
      ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video))
      setProgressText(progressText.concat('Writing audio input...'))
      ffmpeg.FS('writeFile', 'audio.mp3', await fetchFile(audio))
      setProgressText(progressText.concat('Transmuxing...'))
      await ffmpeg.run('-i', 'video.mp4', '-i', 'audio.mp3', '-c:v', 'copy', '-map', '0:v:0', '-map', '1:a:0', 'output.mp4', '-shortest')
      setProgressText(progressText.concat('Exporting video...'))
      const data = ffmpeg.FS('readFile', 'output.mp4')
      const url = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }))
      setProgress(100)
      setComplete(true)
      setProgressText(progressText.concat('Done!'))
      setOutputURL(url)

      setTimeout(() => {
        setTimerComplete(true)
        ffmpeg.exit()
      }, 1000)
    }

    useEffect(() => {
      if (!complete) {
        convertVideo()
      }
    }, [])

    if (!timerComplete) {
      return (
        <>
          <p className={styles.description}>
            Creating your video...
          </p>

          <div className='w-1/2 flex flex-col'>
            <div className="text-lg">
              {progressText.map((el, i) => (
                <p key={i}>
                  {el} <br />
                </p>
              ))}
            </div>
            <NoSsr>
              <LinearProgress variant='determinate' value={progress} />
            </NoSsr>
          </div>
        </>
      )
    }
    return (
      <>
        <p className={styles.description}>
          Your video is ready!
        </p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-600 w-80 aspect-video relative">
            <div className="w-full h-8 bg-black bottom-0 absolute">
              <p className="text-sm text-white p-1">
                Video name
              </p>
            </div>
          </div>
          <div className="flex mt-4 w-full space-x-4">
            <button className={`${styles.buttonSecondary} w-full`}>
              <span className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </span>
              Copy URL
            </button>
            <a className={`${styles.buttonPrimary} w-full`} rel="noreferrer" target="_blank" href={outputURL} download="output.mp4">
              <span className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
              Download video
            </a>
          </div>
          <div className="flex mt-12 w-full">
            <button className={`${styles.buttonPrimary} w-full`} onClick={handleReload}>
              Create a new video
            </button>
          </div>
        </div>
        <Progress />
      </>
    )
  }

  const steps = [
    <StepOne key={0} />,
    <StepTwo key={1} />,
    <StepThree key={2} />,
  ]


  return (
    <div className={styles.container}>
      <Head>
        <title>Video Audio Mixer</title>
        <meta name="description" content="Easily replace or add sound on a video" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title />
        {steps[activeStep]}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://colorman.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Colorman{' '}
          <span className={styles.logo}>

          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
