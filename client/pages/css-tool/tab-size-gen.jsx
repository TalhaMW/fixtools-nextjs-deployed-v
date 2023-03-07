import React, { useState } from 'react';
import HeaderNav from '../../components/common/HeaderNav';
import Footer from '../../components/home/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import CssTool from '../../dbTool/CssTool';
import { useLocation } from 'react-router-dom';
import { GetCurrentPageContent } from '../../utils';
import SEO from '../../components/SEO';

import HeaderNav from '@/components/HeaderNav';

export const TabSize = () => {
  const [value, setValue] = useState('');
  const location = useLocation();

  useEffect(() => {
    document.title = 'CSS Tab Size  Generator';
  }, []);

  const copyText = () => {
    const selct = document.querySelector('.element-code').textContent;
    navigator.clipboard.writeText(selct);
    toast.success('Copied!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const path = location.pathname;
  const { title, desc, image } = GetCurrentPageContent(path, CssTool);
  const pageUrl = window.location.href;
  return (
    <>
      <CustomHead
        title={title}
        ogUrl={process.env.NEXT_PUBLIC_HOST + route.asPath}
        metaDescription={desc}
        ogImageUrl='/programming_tools.jpg'
        ogImageAlt='Fix tools og image'
      />
      <div className='detail-hero'>
        <HeaderNav />
        <div className='detail-hero-content'>
          <div className='detail-hero-content-heading'>
            <h1>CSS Tab Size Generator</h1>
          </div>
          <div className='detail-hero-content-des'>
            <p>
              Generate CSS tab size with our CSS generator tool. Preview the
              result and copy the generated code to your website
            </p>
          </div>
        </div>
      </div>
      <div className='screen'>
        <div className='screen-editor'>
          <h1>Options</h1>

          <div className='screen-editor-color'>
            <label>Value</label>
            <input
              id='horizontal'
              type='range'
              min='0'
              max='10'
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <code>{value}</code>
          </div>
        </div>
        <div className='screen-preview'>
          <h1>Preview</h1>
          <div className='screen-preview-box'>
            <div className='screen-preview-box-sample'>
              <pre
                style={{
                  tabSize: `${value}`,
                  '-moz-tab-size': `${value}`,
                  '-o-tab-size': `${value}`,
                  '-webkit-tab-size': `${value}`,
                  position: 'relative',
                  'white-space': 'pre-wrap',
                }}
              >
                Lorem ipsum dolor sit amet
              </pre>
            </div>
          </div>
          <h1>Code</h1>
          <div className='screen-preview-code'>
            <code className='element-code'>tab-size : {value};</code>
            <i
              style={{ cursor: 'pointer' }}
              onClick={copyText}
              className='fa-regular fa-clone'
            ></i>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />

      <Footer />
    </>
  );
};
