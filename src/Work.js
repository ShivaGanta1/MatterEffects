import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const WorkGridRoot = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '16px', // Replaced theme.spacing(2) with '16px'
}));

const WorkGridRow = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: '16px', // Replaced theme.spacing(2) with '16px'
    '&:last-child': {
        marginBottom: 0,
    },
    '@media (max-width: 960px)': { // Example breakpoint - replaced theme.breakpoints.down('md')
        flexDirection: 'column',
    },
}));

const WorkCardWrapper = styled(Grid, {
    shouldForwardProp: (prop) => prop !== 'aspectX' && prop !== 'aspectY',
})(({ aspectX, aspectY }) => ({
    opacity: 1,
    transform: 'translateY(0px)',
    '--aspect-x': aspectX,
    '--aspect-y': aspectY,
    width: '100%',
    maxWidth: '100%', // Adjust as needed
    marginBottom: '16px', // Replaced theme.spacing(2) with '16px'
    '&:last-child': {
        marginBottom: 0,
    },
}));

const WorkCard = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: 'transparent', // Or match the background color
    color: 'inherit', // Or match the text color
    textDecoration: 'none',
    '&:hover': {
        // Add hover effects if needed
    },
}));

const WorkCardThumbnailWrapper = styled(Box)(() => ({
    position: 'relative',
    overflow: 'hidden',
}));

const WorkCardThumbnailOuter = styled(Box)(() => ({
    transform: 'translateY(-40%) translateZ(0)', // Adjust as needed
    overflow: 'hidden',
}));

const Picture = styled('picture')({}); // You can add global picture styles if needed

const WorkCardPicture = styled(CardMedia)(() => ({
    width: '100%',
    height: 'auto', // or fixed height if needed
    display: 'block',
}));

const WorkCardVideo = styled('video')({
    width: '100%',
    height: 'auto',
    display: 'block',
});

const WorkCardThumbnailInner = styled(Box)(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none', // To ensure video interactions if needed
}));

const WorkCardContentWrapper = styled(CardContent)(() => ({
    padding: '16px', // Replaced theme.spacing(2) with '16px'
    backgroundColor: 'white', // Or match content background color
    color: 'black', // Or match content text color
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '&:last-child': {
        paddingBottom: '16px', // Replaced theme.spacing(2) with '16px'
    },
}));

const WorkCardContentInner = styled(Box)(() => ({
    // Styles for inner content if needed
}));

const WorkCardTitle = styled(Typography)(() => ({
    fontWeight: 'bold',
    fontSize: '1rem', // Adjust as needed
    lineHeight: 1.2, // Adjust as needed
}));


const WorkGridComponent = () => {
    return (
        <WorkGridRoot container direction="column" spacing={2}>
            <WorkGridRow item container justifyContent="flex-start" className="WorkGrid_work-grid__row--landscape__klf5g">
                <WorkCardWrapper item xs={12} sm={6} md={4} lg={4} aspectX={1452} aspectY={890} className="WorkCard_work-card-wrapper__7mGrZ">
                    <WorkCard className="WorkCard_work-card--landscape__cw0_a" href="/work/curtin-open-day" component="a" to="/work/curtin-open-day">
                        <WorkCardThumbnailWrapper className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
                            <WorkCardThumbnailOuter className="WorkCard_work-card__thumbnail-outer__kJvp9">
                                <Picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                                    <source src="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/450x330/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/900x660/filters:quality(80) 2x" media="(min-width: 0px) and (max-width: 479px)" />
                                    <source src="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/932x685/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/1864x1370/filters:quality(80) 2x" media="(min-width: 480px) and (max-width: 991px)" />
                                    <source src="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/1452x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/2904x2136/filters:quality(80) 2x" media="(min-width: 992px) and (max-width: 1512px)" />
                                    <source src="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/1905x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/3810x2804/filters:quality(80) 2x" media="(min-width: 1513px)" />
                                    <WorkCardPicture
                                        component="img"
                                        src="https://a-us.storyblok.com/f/1017006/3720x2280/c7c8f88227/curtin-open-landscape-card.jpg/m/450x330/filters:quality(80)"
                                        alt=""
                                        className="WorkCard_work-card__picture__CqjRI"
                                    />
                                </Picture>
                                <WorkCardThumbnailInner className="WorkCard_work-card__thumbnail-inner__YScRN">
                                    <Picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                                        <source srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/312x178/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/624x356/filters:quality(80) 2x" media="(min-width: 0px) and (max-width: 479px)" />
                                        <source srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/647x370/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/1294x740/filters:quality(80) 2x" media="(min-width: 480px) and (max-width: 991px)" />
                                        <source srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/1008x576/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/2016x1152/filters:quality(80) 2x" media="(min-width: 992px) and (max-width: 1512px)" />
                                        <source srcSet="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/1322x755/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/2644x1510/filters:quality(80) 2x" media="(min-width: 1513px)" />
                                        <WorkCardPicture
                                            component="img"
                                            src="https://a-us.storyblok.com/f/1017006/1476x843/7c8bacd5b5/open-day-inner.jpg/m/312x178/filters:quality(80)"
                                            alt="Screenshot of the Curtin Open Day website"
                                            className="WorkCard_work-card__picture__CqjRI"
                                        />
                                    </Picture>
                                    <WorkCardVideo
                                        className="WorkCard_work-card__video__hb14D"
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        src="https://download-video-ak.vimeocdn.com/v3-1/playback/b6496dfa-af62-4c39-a10d-fb7036b3c7ae/87a19aa0?__token__=st=1740810804~exp=1740825204~acl=%2Fv3-1%2Fplayback%2Fb6496dfa-af62-4c39-a10d-fb7036b3c7ae%2F87a19aa0%2A~hmac=37b561e41472092f561afa193ac56d4ef0db90f31b155a45659f0ab9dc587c97&r=dXMtZWFzdDE%3D"
                                    />
                                </WorkCardThumbnailInner>
                            </WorkCardThumbnailOuter>
                        </WorkCardThumbnailWrapper>
                        <WorkCardContentWrapper className="WorkCard_work-card__content--white__ISlcm">
                            <WorkCardContentInner className="WorkCard_work-card__content-inner__8Mqvf">
                                <WorkCardTitle variant="h3" className="WorkCard_work-card__title__vsvFl">Curtin Open Day</WorkCardTitle>
                            </WorkCardContentInner>
                        </WorkCardContentWrapper>
                    </WorkCard>
                </WorkCardWrapper>
            </WorkGridRow>

             <WorkGridRow item container justifyContent="flex-start" className="WorkGrid_work-grid__row--portrait__nwacA">
                <WorkCardWrapper item xs={12} sm={6} md={3} lg={3} aspectX={710} aspectY={890} className="WorkCard_work-card-wrapper__7mGrZ">
                    <WorkCard className="WorkCard_work-card--portrait__WHYgm" href="/work/sussex-taps" component="a" to="/work/sussex-taps">
                        <WorkCardThumbnailWrapper className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
                            <WorkCardThumbnailOuter className="WorkCard_work-card__thumbnail-outer__kJvp9">
                                <Picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/450x677/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/900x1354/filters:quality(80) 2x" media="(min-width: 0px) and (max-width: 479px)" />
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/932x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/1864x2804/filters:quality(80) 2x" media="(min-width: 480px) and (max-width: 991px)" />
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/710x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/1420x2136/filters:quality(80) 2x" media="(min-width: 992px) and (max-width: 1512px)" />
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/933x1403/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/1866x2806/filters:quality(80) 2x" media="(min-width: 1513px)" />
                                    <WorkCardPicture
                                        component="img"
                                        src="https://a-us.storyblok.com/f/1017006/1864x2333/f75518e100/sussex-portrait-card.jpg/m/450x677/filters:quality(80)"
                                        alt=""
                                        className="WorkCard_work-card__picture__CqjRI"
                                    />
                                </Picture>
                                <WorkCardVideo
                                    className="WorkCard_work-card__video__hb14D"
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    src="https://player.vimeo.com/progressive_redirect/playback/745004855/rendition/720p/file.mp4?loc=external&amp;signature=1dd35b7b1001be056347f1aa639461cf56f40fc35b3f0ad75170809e8ca7d4e4"
                                />
                            </WorkCardThumbnailOuter>
                        </WorkCardThumbnailWrapper>
                        <WorkCardContentWrapper className="WorkCard_work-card__content--white__ISlcm">
                            <WorkCardContentInner className="WorkCard_work-card__content-inner__8Mqvf">
                                <WorkCardTitle variant="h3" className="WorkCard_work-card__title__vsvFl">Sussex Taps</WorkCardTitle>
                            </WorkCardContentInner>
                        </WorkCardContentWrapper>
                    </WorkCard>
                </WorkCardWrapper>
                 <WorkCardWrapper item xs={12} sm={6} md={3} lg={3} aspectX={710} aspectY={890} className="WorkCard_work-card-wrapper__7mGrZ">
                    <WorkCard className="WorkCard_work-card--portrait__WHYgm" href="/work/ferox" component="a" to="/work/ferox">
                        <WorkCardThumbnailWrapper className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
                            <WorkCardThumbnailOuter className="WorkCard_work-card__thumbnail-outer__kJvp9">
                                <Picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/450x677/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/900x1354/filters:quality(80) 2x" media="(min-width: 0px) and (max-width: 479px)" />
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/932x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/1864x2804/filters:quality(80) 2x" media="(min-width: 480px) and (max-width: 991px)" />
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/710x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/1420x2136/filters:quality(80) 2x" media="(min-width: 992px) and (max-width: 1512px)" />
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/933x1403/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/1866x2806/filters:quality(80) 2x" media="(min-width: 1513px)" />
                                    <WorkCardPicture
                                        component="img"
                                        src="https://a-us.storyblok.com/f/1017006/1864x2803/5416277cd6/ferox-outer.jpg/m/450x677/filters:quality(80)"
                                        alt="Futuristic car concept masked by fog on a dark stage"
                                        className="WorkCard_work-card__picture__CqjRI"
                                    />
                                </Picture>
                                <WorkCardVideo
                                    className="WorkCard_work-card__video__hb14D"
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    src="https://player.vimeo.com/progressive_redirect/playback/896099361/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=49e8fbb1560dccb3f536c1caad171d4f6d0f92cc8a03c7e706b7a2527814145a"
                                />
                            </WorkCardThumbnailOuter>
                        </WorkCardThumbnailWrapper>
                        <WorkCardContentWrapper className="WorkCard_work-card__content--white__ISlcm">
                            <WorkCardContentInner className="WorkCard_work-card__content-inner__8Mqvf">
                                <WorkCardTitle variant="h3" className="WorkCard_work-card__title__vsvFl">Ferox</WorkCardTitle>
                            </WorkCardContentInner>
                        </WorkCardContentWrapper>
                    </WorkCard>
                </WorkCardWrapper>
            </WorkGridRow>

            <WorkGridRow item container justifyContent="flex-start" className="WorkGrid_work-grid__row--landscape__klf5g">
                <WorkCardWrapper item xs={12} sm={6} md={4} lg={4} aspectX={1452} aspectY={890} className="WorkCard_work-card-wrapper__7mGrZ">
                    <WorkCard className="WorkCard_work-card--landscape__cw0_a" href="/work/trailswa" component="a" to="/work/trailswa">
                        <WorkCardThumbnailWrapper className="WorkCard_work-card__thumbnail-wrapper__DZTs2">
                            <WorkCardThumbnailOuter className="WorkCard_work-card__thumbnail-outer__kJvp9" style={{transform: 'translateY(-43.4373%) translateZ(0px)'}}>
                                <Picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                                    <source src="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/450x330/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/900x660/filters:quality(80) 2x" media="(min-width: 0px) and (max-width: 479px)" />
                                    <source src="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/932x685/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/1864x1370/filters:quality(80) 2x" media="(min-width: 480px) and (max-width: 991px)" />
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/1452x1068/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/2904x2136/filters:quality(80) 2x" media="(min-width: 992px) and (max-width: 1512px)" />
                                    <source srcSet="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/1905x1402/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/3810x2804/filters:quality(80) 2x" media="(min-width: 1513px)" />
                                    <WorkCardPicture
                                        component="img"
                                        src="https://a-us.storyblok.com/f/1017006/3720x2280/ac63614d7c/trails-outer.jpg/m/450x330/filters:quality(80)"
                                        alt=""
                                        className="WorkCard_work-card__picture__CqjRI"
                                    />
                                </Picture>
                                <WorkCardThumbnailInner className="WorkCard_work-card__thumbnail-inner__YScRN">
                                    <Picture className="Picture_picture__X3Eos WorkCard_work-card__picture__CqjRI">
                                        <source srcSet="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/312x178/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/624x356/filters:quality(80) 2x" media="(min-width: 0px) and (max-width: 479px)" />
                                        <source srcSet="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/647x370/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/1294x740/filters:quality(80) 2x" media="(min-width: 480px) and (max-width: 991px)" />
                                        <source srcSet="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/1008x576/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/2016x1152/filters:quality(80) 2x" media="(min-width: 992px) and (max-width: 1512px)" />
                                        <source srcSet="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/1322x755/filters:quality(80) 1x, https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/2644x1510/filters:quality(80) 2x" media="(min-width: 1513px)" />
                                        <WorkCardPicture
                                            component="img"
                                            src="https://a-us.storyblok.com/f/1017006/2582x1427/67a2757f6a/trailswa-video-landscape-frame.jpg/m/312x178/filters:quality(80)"
                                            alt=""
                                            className="WorkCard_work-card__picture__CqjRI"
                                        />
                                    </Picture>
                                    <WorkCardVideo
                                        className="WorkCard_work-card__video__hb14D"
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        src="https://player.vimeo.com/progressive_redirect/playback/900035513/rendition/720p/file.mp4?loc=external&amp;log_user=0&amp;signature=e9ef6806c16b6f3f049770fa1807499bcb704855df7554226bff097394cbde8c"
                                    />
                                </WorkCardThumbnailInner>
                            </WorkCardThumbnailOuter>
                        </WorkCardThumbnailWrapper>
                        <WorkCardContentWrapper className="WorkCard_work-card__content--white__ISlcm">
                            <WorkCardContentInner className="WorkCard_work-card__content-inner__8Mqvf">
                                <WorkCardTitle variant="h3" className="WorkCard_work-card__title__vsvFl">TrailsWA</WorkCardTitle>
                            </WorkCardContentInner>
                        </WorkCardContentWrapper>
                    </WorkCard>
                </WorkCardWrapper>
            </WorkGridRow>
        </WorkGridRoot>
    );
};

export default WorkGridComponent;