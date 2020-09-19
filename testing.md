# Testing 

## Automated Testing

[W3C Markup Validation Service](https://validator.w3.org/) and [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) were used to validate the project's html and css file. 

### W3C Markup Validation Service

Found only minor errors, such as hanging end tags that I had forgot to remove, and typos in the code. 

The validator noted that an ID attribute was called twice, due to me labelling two sections with the same ID by mistake, whilst fixing code. I quickly rectified the issue.

File names on images had spaces which were promptly renamed - fixing the issue.

No major errors were found.


### W3C CSS Validation Service

Found no errors.

However, the validator did find [these errors](assets/img/CSS-validator.PNG) in Bootstrap, but as I cannot edit Bootstrap's CSS files directly, I have no choice but to ignore it.

#### Warnings:

- The following warning were ignored as they can be necessary to ensure functionality on different browsers:
    - -webkit-transition is an unknown vendor extension
    - -moz-transition is an unknown vendor extension
    - -o-transition is an unknown vendor extension
    - -webkit-background-size is an unknown vendor extension
    - -moz-background-size is an unknown vendor extension
    - -o-background-size is an unknown vendor extension
    - -moz-animation is an unknown vendor extension
    - -webkit-animation is an unknown vendor extension
    - -webkit-transform is an unknown vendor extension
    - -moz-transform is an unknown vendor extension

- W3C's CSS Validation Service flagged **line 175** as an error.
    - The warning: '*auto* is not defined by any specification as an allowed value for *pointer-events*, but is supported in multiple browsers'
    - However, this line is necessary for the functionality of the navbar fullscreen overlay menu - a screenshot of the code can be seen [here](assets/img/codeScreenshot.PNG)
    - Removing this line breaks the navigation links when on the fullscreen overlay - they will no longer be clickable.
    - Ignoring the warning.

- The service flagged 768 warnings in Bootstrap. As I cannot address these warning directly, I am forced to ignore it. 


### Page Speed/Performace

I used [UpTrends](https://www.uptrends.com/tools/website-speed-test) and Google's [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) to check the speed of my website. Here are my results when using the service:

#### Test 1

The first test resulted in a fairly unsatisfactory score.

![UpTrends Test 1](assets/img/speed-img1-test1.PNG)

The major impact to the site's performance/speed was due to render-blocking resources, inefficient encode images and improper image sizes. This resulted in a load time of 2.1s and would cause notable stuttering when scrolling down the page on mobile devices. 


The following image shows the impact of the the inefficient image sizes to the performance of my site:

![UpTrends Test 1 Image 2](assets/img/speed-img2-test1.PNG)


It was imperative, then, that I address the issue concerning the image file sizes. To do this, I used [TinyPNG](https://tinypng.com/)

![TinyPNG Image 1](assets/img/tinypng-img1.PNG)
![TinyPNG Image 2](assets/img/tinypng-img2.PNG)

TinyPNG managed to significantly reduce the size of my images, saving me a total of 16 MB - a 72% difference.


### Test 2

Running the second test, after resizing the images, produced fruitful results:

![UpTrends Test 2](assets/img/speed-img1-test2.PNG)

This gave me a 23% increase in performance, and reduced the site's load time by 40%, from 2.1s to 1.5s.


### Test 3 

However this did not mean the site's performance was at its best. I found that my site still had some major performance issues when running through Google's [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) 

| Desktop | Mobile |
| ------- | ------ |
| ![PageSpeed Insights Desktop](assets/img/pageInsights-img2-test3.PNG) | ![PageSpeed Insights Mobile](assets/img/pageInsights-img1-test3.PNG) |

My concern, was the performance impact on mobile, because despite resizing the image files, I still experienced stuttering on mobile devices. Page Insights noted that the images were still impacting performance:

| Desktop | Mobile |
| ------- | ------ |
| ![PageSpeed Insights Desktop](assets/img/pageInsights-img4-test3.PNG) | ![PageSpeed Insights Mobile](assets/img/pageInsights-img3-test3.PNG) |

PageSpeed Insights recommended changing the format of the images from PNG and JPEG to a next-gen format, like webP, which would reduce the screen loading by an estimate of 3.75s on mobile, and 0.67s on desktop. 

- I used multiple online converters to convert my images from PNG to webP, such as [ImageOnline.com](https://image.online-convert.com/convert-to-webp) [Convertio](https://convertio.co/png-webp/) and [Zamzar](https://www.zamzar.com/convert/png-to-webp/). 
    - Online converters often have limits on how many files you can convert, so I used multiple converters so that I could convert all my images.

Converting the images didn't have much impact on the Speed Score, however it did drastically reduce the stuttering when scrolling on mobile devices.


### Unfixable Performance Issues 

The remaining performance impact derives from the render-blocking resources primarily caused by Bootstrap and Font Awesome. The only 'fix' to this issue would be to locally load a limited CSS file for both Bootstrap and Font Awesome, which would include *only* the files that I need. 

I tested this on the local repository of the site by doing the following steps:

1. I removed the link to Bootstrap's extenal stylesheet (CDN). 
2. I copied the *used* Bootstrap CSS code from the deployed website by using the [CSS Used](https://chrome.google.com/webstore/detail/css-used/cdopjfddjlonogibjahpnmjpoangjfff?hl=en) extension in [Chrome's DevTools]https://developers.google.com/web/tools/chrome-devtools() 
3. I then minified the code using [CSS Minifier](https://cssminifier.com/)
4. I copied the minified css code into my main CSS file (style.css) before any of my own code.
5. I navigated to the [Bootstrap GitHub Repository](https://github.com/twbs/bootstrap)
6. From there I downloaded `bootstrap-grid.css.min` from *bootstrap/dist/css* and saved it to my assets/css folder in my local directory. 
7. I linked to the newly downloaded `bootstrap.grid.css.min` in my HTML and loaded it before my `style.css` file.
8. I saved the changes made to both `index.html` and `style.css`

This process did work, although it would require some fine tweaking to make it aesthetically identical to the deployed website. Additionally, I did the same process but using a Custom Bootstrap CSS file from [here](https://getbootstrap.com/docs/3.4/customize/) in place of `bootstrap-grid.css.min`. This made the site's features more functional but causes visual inconsistencies, such as the font size being a lot smaller than the original website.

There was also the concern of how this would work, if at all, once the website was deployed. Therefore, this may be a 'fix' that I will implement and try to resolve in the future. For now, the issue is not damaging to the site, and the site speed is quick enough to not cause user irritation and intervene with user input. Nevertheless, it will be wise to recitify this issue in the future.



### Testing User Stories

- #### First Time Visitor Goals 

- #### Returning Visitor Goals 

- #### Frequent Visitor Goals

### Further Testing 

### Known Bugs 

