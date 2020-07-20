/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import {
	embedContentIcon,
	embedAudioIcon,
	embedPhotoIcon,
	embedVideoIcon,
	embedTwitterIcon,
	embedYouTubeIcon,
	embedFacebookIcon,
	embedInstagramIcon,
	embedWordPressIcon,
	embedSpotifyIcon,
	embedFlickrIcon,
	embedVimeoIcon,
	embedRedditIcon,
	embedTumblrIcon,
	embedAmazonIcon,
	embedAnimotoIcon,
	embedDailymotionIcon,
} from './icons';

/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
	{
		isDefault: true,
		name: 'embed',
		title: _x( 'Embed', 'block title' ),
		icon: embedContentIcon,
		description: __(
			'Embed videos, images, tweets, audio, and other content from external sources.'
		),
		attributes: { providerNameSlug: '' }, // todo ts check this
	},
	{
		name: 'twitter',
		title: 'Twitter',
		icon: embedTwitterIcon,
		keywords: [ 'tweet', __( 'social' ) ],
		description: __( 'Embed a tweet.' ),
		patterns: [ /^https?:\/\/(www\.)?twitter\.com\/.+/i ], // todo ts - create util for basic RegEx
		attributes: { providerNameSlug: 'twitter', common: true },
	},
	{
		name: 'youtube',
		title: 'YouTube',
		icon: embedYouTubeIcon,
		keywords: [ __( 'music' ), __( 'video' ) ],
		description: __( 'Embed a YouTube video.' ),
		patterns: [
			/^https?:\/\/((m|www)\.)?youtube\.com\/.+/i,
			/^https?:\/\/youtu\.be\/.+/i,
		],
		attributes: { providerNameSlug: 'youtube', common: true },
	},
	{
		name: 'facebook',
		title: 'Facebook',
		icon: embedFacebookIcon,
		keywords: [ __( 'social' ) ],
		description: __( 'Embed a Facebook post.' ),
		patterns: [ /^https?:\/\/www\.facebook.com\/.+/i ],
		attributes: {
			providerNameSlug: 'facebook',
			previewable: false,
			common: true,
		},
	},
	{
		name: 'instagram',
		title: 'Instagram',
		icon: embedInstagramIcon,
		keywords: [ __( 'image' ), __( 'social' ) ],
		description: __( 'Embed an Instagram post.' ),
		patterns: [ /^https?:\/\/(www\.)?instagr(\.am|am\.com)\/.+/i ],
		attributes: { providerNameSlug: 'instagram', common: true },
	},
	{
		name: 'wordpress',
		title: 'WordPress',
		icon: embedWordPressIcon,
		keywords: [ __( 'post' ), __( 'blog' ) ],
		description: __( 'Embed a WordPress post.' ),
		attributes: {
			providerNameSlug: 'wordpress',
			responsive: false,
			common: true,
		},
	},
	{
		name: 'soundcloud',
		title: 'SoundCloud',
		icon: embedAudioIcon,
		keywords: [ __( 'music' ), __( 'audio' ) ],
		description: __( 'Embed SoundCloud content.' ),
		patterns: [ /^https?:\/\/(www\.)?soundcloud\.com\/.+/i ],
		attributes: { providerNameSlug: 'soundcloud', common: true },
	},
	{
		name: 'spotify',
		title: 'Spotify',
		icon: embedSpotifyIcon,
		keywords: [ __( 'music' ), __( 'audio' ) ],
		description: __( 'Embed Spotify content.' ),
		patterns: [ /^https?:\/\/(open|play)\.spotify\.com\/.+/i ],
		attributes: { providerNameSlug: 'spotify', common: true },
	},
	{
		name: 'flickr',
		title: 'Flickr',
		icon: embedFlickrIcon,
		keywords: [ __( 'image' ) ],
		description: __( 'Embed Flickr content.' ),
		patterns: [
			/^https?:\/\/(www\.)?flickr\.com\/.+/i,
			/^https?:\/\/flic\.kr\/.+/i,
		],
		attributes: { providerNameSlug: 'flickr', common: true },
	},
	{
		name: 'vimeo',
		title: 'Vimeo',
		icon: embedVimeoIcon,
		keywords: [ __( 'video' ) ],
		description: __( 'Embed a Vimeo video.' ),
		patterns: [ /^https?:\/\/(www\.)?vimeo\.com\/.+/i ],
		attributes: { providerNameSlug: 'vimeo', common: true },
	},
	{
		name: 'animoto',
		title: 'Animoto',
		icon: embedAnimotoIcon,
		description: __( 'Embed an Animoto video.' ),
		patterns: [ /^https?:\/\/(www\.)?(animoto|video214)\.com\/.+/i ],
		attributes: { providerNameSlug: 'animoto' },
	},
	{
		name: 'cloudup',
		title: 'Cloudup',
		icon: embedContentIcon,
		description: __( 'Embed Cloudup content.' ),
		patterns: [ /^https?:\/\/cloudup\.com\/.+/i ],
		attributes: { providerNameSlug: 'cloudup' },
	},
	{
		// Deprecated since CollegeHumor content is now powered by YouTube
		name: 'collegehumor',
		title: 'CollegeHumor',
		icon: embedVideoIcon,
		description: __( 'Embed CollegeHumor content.' ),
		supports: { inserter: false },
		patterns: [],
		attributes: { providerNameSlug: 'collegehumor' },
	},
	{
		name: 'crowdsignal',
		title: 'Crowdsignal',
		icon: embedContentIcon,
		keywords: [ 'polldaddy', __( 'survey' ) ],
		transform: [
			{
				type: 'block',
				blocks: [ 'polldaddy' ],
				transform: ( content ) =>
					createBlock( 'crowdsignal', {
						content,
					} ),
			},
		],
		description: __( 'Embed Crowdsignal (formerly Polldaddy) content.' ),
		patterns: [
			/^https?:\/\/((.+\.)?polldaddy\.com|poll\.fm|.+\.survey\.fm)\/.+/i,
		],
		attributes: { providerNameSlug: 'crowdsignal' },
	},
	{
		name: 'dailymotion',
		title: 'Dailymotion',
		icon: embedDailymotionIcon,
		keywords: [ __( 'video' ) ],
		description: __( 'Embed a Dailymotion video.' ),
		patterns: [ /^https?:\/\/(www\.)?dailymotion\.com\/.+/i ],
		attributes: { providerNameSlug: 'dailymotion' },
	},
	{
		name: 'imgur',
		title: 'Imgur',
		icon: embedPhotoIcon,
		description: __( 'Embed Imgur content.' ),
		patterns: [ /^https?:\/\/(.+\.)?imgur\.com\/.+/i ],
		attributes: { providerNameSlug: 'imgur' },
	},
	{
		name: 'issuu',
		title: 'Issuu',
		icon: embedContentIcon,
		description: __( 'Embed Issuu content.' ),
		patterns: [ /^https?:\/\/(www\.)?issuu\.com\/.+/i ],
		attributes: { providerNameSlug: 'issuu' },
	},
	{
		name: 'kickstarter',
		title: 'Kickstarter',
		icon: embedContentIcon,
		description: __( 'Embed Kickstarter content.' ),
		patterns: [
			/^https?:\/\/(www\.)?kickstarter\.com\/.+/i,
			/^https?:\/\/kck\.st\/.+/i,
		],
		attributes: { providerNameSlug: 'kickstarter' },
	},
	{
		name: 'meetup-com',
		title: 'Meetup.com',
		icon: embedContentIcon,
		description: __( 'Embed Meetup.com content.' ),
		patterns: [ /^https?:\/\/(www\.)?meetu(\.ps|p\.com)\/.+/i ],
		attributes: { providerNameSlug: 'meetup-com' },
	},
	{
		name: 'mixcloud',
		title: 'Mixcloud',
		icon: embedAudioIcon,
		keywords: [ __( 'music' ), __( 'audio' ) ],
		description: __( 'Embed Mixcloud content.' ),
		patterns: [ /^https?:\/\/(www\.)?mixcloud\.com\/.+/i ],
		attributes: { providerNameSlug: 'mixcloud' },
	},
	{
		// Deprecated in favour of the crowdsignal block
		name: 'polldaddy',
		title: 'Polldaddy',
		icon: embedContentIcon,
		description: __( 'Embed Polldaddy content.' ),
		supports: {
			inserter: false,
		},
		patterns: [],
		attributes: { providerNameSlug: 'polldaddy' },
	},
	{
		name: 'reddit',
		title: 'Reddit',
		icon: embedRedditIcon,
		description: __( 'Embed a Reddit thread.' ),
		patterns: [ /^https?:\/\/(www\.)?reddit\.com\/.+/i ],
		attributes: { providerNameSlug: 'reddit' },
	},
	{
		name: 'reverbnation',
		title: 'ReverbNation',
		icon: embedAudioIcon,
		description: __( 'Embed ReverbNation content.' ),
		patterns: [ /^https?:\/\/(www\.)?reverbnation\.com\/.+/i ],
		attributes: { providerNameSlug: 'reverbnation' },
	},
	{
		name: 'screencast',
		title: 'Screencast',
		icon: embedVideoIcon,
		description: __( 'Embed Screencast content.' ),
		patterns: [ /^https?:\/\/(www\.)?screencast\.com\/.+/i ],
		attributes: { providerNameSlug: 'screencast' },
	},
	{
		name: 'scribd',
		title: 'Scribd',
		icon: embedContentIcon,
		description: __( 'Embed Scribd content.' ),
		patterns: [ /^https?:\/\/(www\.)?scribd\.com\/.+/i ],
		attributes: { providerNameSlug: 'scribd' },
	},
	{
		name: 'slideshare',
		title: 'Slideshare',
		icon: embedContentIcon,
		description: __( 'Embed Slideshare content.' ),
		patterns: [ /^https?:\/\/(.+?\.)?slideshare\.net\/.+/i ],
		attributes: { providerNameSlug: 'slideshare' },
	},
	{
		name: 'smugmug',
		title: 'SmugMug',
		icon: embedPhotoIcon,
		description: __( 'Embed SmugMug content.' ),
		patterns: [ /^https?:\/\/(.+\.)?smugmug\.com\/.*/i ],
		attributes: { providerNameSlug: 'smugmug', previewable: false },
	},
	{
		// Deprecated in favour of the speaker-deck block.
		name: 'speaker',
		title: 'Speaker',
		icon: embedAudioIcon,
		supports: {
			inserter: false,
		},
		patterns: [],
		attributes: { providerNameSlug: 'speaker' },
	},
	{
		name: 'speaker-deck',
		title: 'Speaker Deck',
		icon: embedContentIcon,
		transform: [
			{
				type: 'block',
				blocks: [ 'speaker' ],
				transform: ( content ) => {
					return createBlock( 'speaker-deck', {
						content,
					} );
				},
			},
		],
		description: __( 'Embed Speaker Deck content.' ),
		patterns: [ /^https?:\/\/(www\.)?speakerdeck\.com\/.+/i ],
		attributes: { providerNameSlug: 'speaker-deck' },
	},
	{
		name: 'tiktok',
		title: 'TikTok',
		icon: embedVideoIcon,
		keywords: [ __( 'video' ) ],
		description: __( 'Embed a TikTok video.' ),
		patterns: [ /^https?:\/\/(www\.)?tiktok\.com\/.+/i ],
		attributes: { providerNameSlug: 'tiktok' },
	},
	{
		name: 'ted',
		title: 'TED',
		icon: embedVideoIcon,
		description: __( 'Embed a TED video.' ),
		patterns: [ /^https?:\/\/(www\.|embed\.)?ted\.com\/.+/i ],
		attributes: { providerNameSlug: 'ted' },
	},
	{
		name: 'tumblr',
		title: 'Tumblr',
		icon: embedTumblrIcon,
		keywords: [ __( 'social' ) ],
		description: __( 'Embed a Tumblr post.' ),
		patterns: [ /^https?:\/\/(www\.)?tumblr\.com\/.+/i ],
		attributes: { providerNameSlug: 'tumblr' },
	},
	{
		name: 'videopress',
		title: 'VideoPress',
		icon: embedVideoIcon,
		keywords: [ __( 'video' ) ],
		description: __( 'Embed a VideoPress video.' ),
		patterns: [ /^https?:\/\/videopress\.com\/.+/i ],
		attributes: { providerNameSlug: 'videopress' },
	},
	{
		name: 'wordpress-tv',
		title: 'WordPress.tv',
		icon: embedVideoIcon,
		description: __( 'Embed a WordPress.tv video.' ),
		patterns: [ /^https?:\/\/wordpress\.tv\/.+/i ],
		attributes: { providerNameSlug: 'wordpress-tv' },
	},
	{
		name: 'amazon-kindle',
		title: 'Amazon Kindle',
		icon: embedAmazonIcon,
		keywords: [ __( 'ebook' ) ],
		description: __( 'Embed Amazon Kindle content.' ),
		patterns: [
			/^https?:\/\/([a-z0-9-]+\.)?(amazon|amzn)(\.[a-z]{2,4})+\/.+/i,
			/^https?:\/\/(www\.)?(a\.co|z\.cn)\/.+/i,
		],
		attributes: { providerNameSlug: 'amazon-kindle', responsive: false },
	},
];

export default variations;
