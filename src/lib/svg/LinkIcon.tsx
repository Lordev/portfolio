import { SVGAttributes } from "react";

const LinkIconSvg = (props: SVGAttributes<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} fill="currentColor" {...props}>
        <g clipPath="url(#a)">
            <mask
                id="b"
                width={11}
                height={11}
                x={0}
                y={1}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: 'luminance',
                }}
            >
                <path d="M.43 1.263h10.403V11.68H.43V1.263Z" />
            </mask>
            <g mask="url(#b)">
                <path d="M10.23 5.51a.544.544 0 0 0-.551.536v4.562H1.534V2.694h4.692c.308 0 .555-.24.555-.536a.548.548 0 0 0-.555-.54H.982a.547.547 0 0 0-.552.54v8.986c0 .296.247.537.552.537h9.249c.304 0 .555-.24.555-.536v-5.1a.547.547 0 0 0-.555-.535Z" />
            </g>
            <mask
                id="c"
                width={10}
                height={8}
                x={3}
                y={0}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: 'luminance',
                }}
            >
                <path d="M3.9.007h8.545V8H3.9V.007Z" />
            </mask>
            <g mask="url(#c)">
                <path d="M11.89.007H8.558a.545.545 0 0 0-.551.54c0 .295.247.535.551.535h2.001L4.87 6.61a.525.525 0 0 0 0 .76.573.573 0 0 0 .782 0l5.69-5.53v1.944c0 .296.244.536.552.536.305 0 .552-.24.552-.536V.546c0-.299-.25-.54-.555-.54Z" />
            </g>
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h13v12H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default LinkIconSvg;
