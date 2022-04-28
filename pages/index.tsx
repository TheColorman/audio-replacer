/* eslint-disable @next/next/no-img-element */
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

const File = ({ fileName }: { fileName: string }) => (
  <div
    className='rounded-lg border-2 border-gray-300 flex justify-around items-center p-2 hover:bg-black/5 text-center max-w-xs'
    title={fileName}
  >
    <img
      src={`/icons/${fileName.split('.').pop()}.svg`}
      alt='File icon'
      width={48}
      height={48}
    />
    <p className="text-sm font-mono">
      {fileName.split(".").shift()!.length > 25 ? `${fileName.split(".").shift()!.slice(0, 25)}...` : fileName.split(".").shift()}
    </p>
  </div>
)

const Home: NextPage = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [video, setVideo] = React.useState<File | null>(null)
  const [audio, setAudio] = React.useState<File | null>(null)
  // const [videoDelay, setVideoDelay] = React.useState<string>("0")
  // const [audioDelay, setAudioDelay] = React.useState<string>("0")
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
  //? When passing the value to "setVideoDelay" the input becomes unusable???
  // const handleChangeVideoDelay = (event: ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value
  //   console.log(value)
  //   setVideoDelay(value)
  // }
  // const handleChangeAudioDelay = (event: ChangeEvent<HTMLInputElement>) => {
  //   setAudioDelay(event.target.value)
  // }

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
          <File fileName={video.name} />
        )}
        {/* Plus */}
        {audio && (
          <>
            <h1 className='text-8xl'>
              +
            </h1>
            {/* Image (audio) */}
            <File fileName={audio.name} />
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
            <div className='relative'>
              <label htmlFor="upload-video" className={`${styles.buttonPrimary} hover:cursor-pointer inline-flex h-full`}>
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
                accept="video/*, image/*"
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
                  className='focus:outline-none min-w-[20rem] cursor-not-allowed'
                  id="url-input"
                  type="url"
                  placeholder=" Enter URL (e.g. https://youtu.be/...)"
                  disabled
                  title="URLs are currently unavailable"
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
                    <div className="p-3 w-72">
                      <p className='text-base'>The following URLs are supported:</p>
                      <p className={styles.code + " text-sm"}>
                        youtu.be/ <br />
                        youtube.com/ <br />
                      </p>
                      <strong>NOTE: URLs are currently unavailable due to YouTube request policies.</strong>
                    </div>
                  </Popover>
                </NoSsr>
              </p>
            </div>
          </div>
          {/* Input value doesn't work when using setState for some reason */}
          {/* <div className="mt-3 w-full flex justify-center">
            Start video after
            <input
              type="number"
              // pattern="[0-9]*"
              placeholder='0.0'
              className="w-12 border-2 rounded mx-2"
              onChange={handleChangeVideoDelay}
            />
            seconds
          </div> */}
          <div className="flex mt-4 w-full space-x-4">
            <button className={`${styles.buttonSecondaryDisabled} w-full`}>
              Back
            </button>
            {video ? (
              <button className={`${styles.buttonPrimary} w-full`} onClick={handleNext}>
                Continue
              </button>
            ) : (
              <button className={`${styles.buttonPrimaryDisabled} w-full`} title='Please choose a video'>
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
            <div className='relative'>
              <label htmlFor="upload-video" className={`${styles.buttonPrimary} hover:cursor-pointer inline-flex h-full`}>
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
                  className='focus:outline-none min-w-[20rem] cursor-not-allowed'
                  id="url-input"
                  type="url"
                  placeholder=" Enter URL (e.g. https://youtu.be/...)"
                  disabled
                  title="URLs are currently unavailable"
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
              <button className={`${styles.buttonPrimaryDisabled} w-full`} title='Please choose some audio'>
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
    const [progressText, setProgressText] = React.useState<string>("")
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
      setProgressText('Loading ffmpeg...')
      await ffmpeg.load()
      ffmpeg.setProgress(({ ratio }) => {
        setProgress(ratio > 1 ? ratio : ratio * 100)
      })
      console.count("FFMPEG RUNS")
      console.log(video.type)
      if (video.type.startsWith("video")) {
        // For videos
        setProgressText('Writing video input...')
        ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video))
        setProgressText('Writing audio input...')
        ffmpeg.FS('writeFile', 'audio.mp3', await fetchFile(audio))
        setProgressText('Transmuxing...')
        await ffmpeg.run('-i', 'video.mp4', '-i', 'audio.mp3', '-c:v', 'copy', '-map', '0:v:0', '-map', '1:a:0', '-shortest', '-fflags', '+shortest', '-max_interleave_delta', '100M', 'output.mp4')
      } else {
        // For images
        setProgressText('Writing image input...')
        ffmpeg.FS('writeFile', 'image.jpg', await fetchFile(video))
        setProgressText('Writing audio input...')
        ffmpeg.FS('writeFile', 'audio.mp3', await fetchFile(audio))
        setProgressText('Preparing audio...')
        await ffmpeg.run('-i', 'audio.mp3', '-map', '0:a:0', 'audioCleaned.mp3')
        setProgressText('Transmuxing...')
        await ffmpeg.run('-loop', '1', '-i', 'image.jpg', '-i', 'audioCleaned.mp3', '-c:v', 'libx264', '-tune', 'stillimage', '-filter:v', 'fps=1', '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', 'output.mp4')
      }
      setProgressText('Exporting video...')
      const data = ffmpeg.FS('readFile', 'output.mp4')
      const url = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }))
      setProgress(100)
      setComplete(true)
      setProgressText('Done!')
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
              {progressText}
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
          <video controls className='max-w-md'>
            <source
              src={outputURL}
              type="video/mp4"
            />
          </video>
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
          rel="noopener noreferrer">
          Created by Colorman
        </a>
        <a
          href="https://github.com/TheColorman/audio-replacer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <svg className='mx-1 ml-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          GitHub Pages{' '}
          <span className={styles.logo}>

          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home