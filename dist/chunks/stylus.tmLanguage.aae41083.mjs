const name = "stylus";
const scopeName = "source.stylus";
const fileTypes = [
	"styl",
	"stylus",
	"css.styl",
	"css.stylus"
];
const patterns = [
	{
		include: "#comment"
	},
	{
		include: "#at_rule"
	},
	{
		include: "#language_keywords"
	},
	{
		include: "#language_constants"
	},
	{
		include: "#variable_declaration"
	},
	{
		include: "#function"
	},
	{
		include: "#selector"
	},
	{
		include: "#declaration"
	},
	{
		captures: {
			"1": {
				name: "punctuation.section.property-list.begin.css"
			},
			"2": {
				name: "punctuation.section.property-list.end.css"
			}
		},
		match: "(\\{)(\\})",
		name: "meta.brace.curly.css"
	},
	{
		match: "\\{|\\}",
		name: "meta.brace.curly.css"
	},
	{
		include: "#numeric"
	},
	{
		include: "#string"
	},
	{
		include: "#operator"
	}
];
const repository = {
	comment: {
		patterns: [
			{
				include: "#comment_block"
			},
			{
				include: "#comment_line"
			}
		]
	},
	comment_block: {
		begin: "/\\*",
		beginCaptures: {
			"0": {
				name: "punctuation.definition.comment.begin.css"
			}
		},
		end: "\\*/",
		endCaptures: {
			"0": {
				name: "punctuation.definition.comment.end.css"
			}
		},
		name: "comment.block.css"
	},
	comment_line: {
		begin: "(^[ \\t]+)?(?=//)",
		beginCaptures: {
			"1": {
				name: "punctuation.whitespace.comment.leading.stylus"
			}
		},
		end: "(?!\\G)",
		patterns: [
			{
				begin: "//",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.comment.stylus"
					}
				},
				end: "(?=\\n)",
				name: "comment.line.double-slash.stylus"
			}
		]
	},
	selector: {
		patterns: [
			{
				match: "(?:(?=\\w)(?<![\\w-]))(a|abbr|acronym|address|area|article|aside|audio|b|base|bdi|bdo|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|main|map|mark|math|menu|menuitem|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rb|rp|rt|rtc|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|svg|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr)(?:(?<=\\w)(?![\\w-]))",
				name: "entity.name.tag.css"
			},
			{
				match: "(?:(?=\\w)(?<![\\w-]))(vkern|view|use|tspan|tref|title|textPath|text|symbol|switch|svg|style|stop|set|script|rect|radialGradient|polyline|polygon|pattern|path|mpath|missing-glyph|metadata|mask|marker|linearGradient|line|image|hkern|glyphRef|glyph|g|foreignObject|font-face-uri|font-face-src|font-face-name|font-face-format|font-face|font|filter|feTurbulence|feTile|feSpotLight|feSpecularLighting|fePointLight|feOffset|feMorphology|feMergeNode|feMerge|feImage|feGaussianBlur|feFuncR|feFuncG|feFuncB|feFuncA|feFlood|feDistantLight|feDisplacementMap|feDiffuseLighting|feConvolveMatrix|feComposite|feComponentTransfer|feColorMatrix|feBlend|ellipse|desc|defs|cursor|color-profile|clipPath|circle|animateTransform|animateMotion|animateColor|animate|altGlyphItem|altGlyphDef|altGlyph|a)(?:(?<=\\w)(?![\\w-]))",
				name: "entity.name.tag.svg.css"
			},
			{
				match: "\\s*(\\,)\\s*",
				name: "meta.selector.stylus"
			},
			{
				match: "\\*",
				name: "meta.selector.stylus"
			},
			{
				match: "\\s*(\\&)([a-zA-Z0-9_-]+)\\s*",
				captures: {
					"2": {
						name: "entity.other.attribute-name.parent-selector-suffix.stylus"
					}
				},
				name: "meta.selector.stylus"
			},
			{
				match: "\\s*(\\&)\\s*",
				name: "meta.selector.stylus"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css"
					}
				},
				match: "(\\.)[a-zA-Z0-9_-]+",
				name: "entity.other.attribute-name.class.css"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css"
					}
				},
				match: "(#)[a-zA-Z][a-zA-Z0-9_-]*",
				name: "entity.other.attribute-name.id.css"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css"
					}
				},
				match: "(:+)(after|before|content|first-letter|first-line|host|(-(moz|webkit|ms)-)?selection)\\b",
				name: "entity.other.attribute-name.pseudo-element.css"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css"
					}
				},
				match: "(:)((first|last)-child|(first|last|only)-of-type|empty|root|target|first|left|right)\\b",
				name: "entity.other.attribute-name.pseudo-class.css"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css"
					}
				},
				match: "(:)(checked|enabled|default|disabled|indeterminate|invalid|optional|required|valid)\\b",
				name: "entity.other.attribute-name.pseudo-class.ui-state.css"
			},
			{
				begin: "((:)not)(\\()",
				beginCaptures: {
					"1": {
						name: "entity.other.attribute-name.pseudo-class.css"
					},
					"2": {
						name: "punctuation.definition.entity.css"
					},
					"3": {
						name: "punctuation.section.function.css"
					}
				},
				end: "\\)",
				endCaptures: {
					"0": {
						name: "punctuation.section.function.css"
					}
				},
				patterns: [
					{
						include: "#selector"
					}
				]
			},
			{
				captures: {
					"1": {
						name: "entity.other.attribute-name.pseudo-class.css"
					},
					"2": {
						name: "punctuation.definition.entity.css"
					},
					"3": {
						name: "punctuation.section.function.css"
					},
					"4": {
						name: "constant.numeric.css"
					},
					"5": {
						name: "punctuation.section.function.css"
					}
				},
				match: "((:)nth-(?:(?:last-)?child|(?:last-)?of-type))(\\()(\\-?(?:\\d+n?|n)(?:\\+\\d+)?|even|odd)(\\))"
			},
			{
				match: "((:)dir)\\s*(?:(\\()(ltr|rtl)?(\\)))?",
				captures: {
					"1": {
						name: "entity.other.attribute-name.pseudo-class.css"
					},
					"2": {
						name: "puncutation.definition.entity.css"
					},
					"3": {
						name: "punctuation.section.function.css"
					},
					"4": {
						name: "constant.language.css"
					},
					"5": {
						name: "punctuation.section.function.css"
					}
				}
			},
			{
				match: "((:)lang)\\s*(?:(\\()(\\w+(-\\w+)?)?(\\)))?",
				captures: {
					"1": {
						name: "entity.other.attribute-name.pseudo-class.css"
					},
					"2": {
						name: "puncutation.definition.entity.css"
					},
					"3": {
						name: "punctuation.section.function.css"
					},
					"4": {
						name: "constant.language.css"
					},
					"6": {
						name: "punctuation.section.function.css"
					}
				}
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css"
					}
				},
				match: "(:)(active|hover|link|visited|focus)\\b",
				name: "entity.other.attribute-name.pseudo-class.css"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css"
					}
				},
				match: "(::)(shadow)\\b",
				name: "entity.other.attribute-name.pseudo-class.css"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.css"
					},
					"2": {
						name: "entity.other.attribute-name.attribute.css"
					},
					"3": {
						name: "punctuation.separator.operator.css"
					},
					"4": {
						name: "string.unquoted.attribute-value.css"
					},
					"5": {
						name: "string.quoted.double.attribute-value.css"
					},
					"6": {
						name: "punctuation.definition.string.begin.css"
					},
					"7": {
						name: "punctuation.definition.string.end.css"
					},
					"8": {
						name: "punctuation.definition.entity.css"
					}
				},
				match: "(?i)(\\[)\\s*(-?[_a-z\\\\[[:^ascii:]]][_a-z0-9\\-\\\\[[:^ascii:]]]*)(?:\\s*([~|^$*]?=)\\s*(?:(-?[_a-z\\\\[[:^ascii:]]][_a-z0-9\\-\\\\[[:^ascii:]]]*)|((?>(['\"])(?:[^\\\\]|\\\\.)*?(\\6)))))?\\s*(\\])",
				name: "meta.attribute-selector.css"
			},
			{
				include: "#interpolation"
			},
			{
				include: "#variable"
			}
		]
	},
	variable_declaration: {
		begin: "^[^\\S\\n]*(\\$?[a-zA-Z_-][a-zA-Z0-9_-]*)[^\\S\\n]*(\\=|\\?\\=|\\:\\=)",
		beginCaptures: {
			"1": {
				name: "variable.stylus"
			},
			"2": {
				name: "keyword.operator.stylus"
			}
		},
		end: "(\\n)|(;)|(?=\\})",
		endCaptures: {
			"2": {
				name: "punctuation.terminator.rule.css"
			}
		},
		patterns: [
			{
				include: "#property_values"
			}
		]
	},
	declaration: {
		begin: "((?<=^)[^\\S\\n]+)|((?<=;)[^\\S\\n]*)|((?<=\\{)[^\\S\\n]*)",
		end: "(?=\\n)|(;)|(?=\\})|(\\n)",
		endCaptures: {
			"2": {
				name: "punctuation.terminator.rule.css"
			}
		},
		name: "meta.property-list.css",
		patterns: [
			{
				match: "(?x) (?<![\\w-])\n--\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*",
				name: "variable.css"
			},
			{
				include: "#language_keywords"
			},
			{
				include: "#language_constants"
			},
			{
				match: "(?:(?<=^)[^\\S\\n]+(\\n))"
			},
			{
				match: "\\G\\s*(counter-reset|counter-increment)(?:(:)|[^\\S\\n])[^\\S\\n]*([a-zA-Z_-][a-zA-Z0-9_-]*)",
				captures: {
					"1": {
						name: "support.type.property-name.css"
					},
					"2": {
						name: "punctuation.separator.key-value.css"
					},
					"3": {
						name: "variable.section.css"
					}
				},
				name: "meta.property.counter.css"
			},
			{
				begin: "\\G\\s*(filter)(?:(:)|[^\\S\\n])[^\\S\\n]*",
				beginCaptures: {
					"1": {
						name: "support.type.property-name.css"
					},
					"2": {
						name: "punctuation.separator.key-value.css"
					}
				},
				end: "(?=\\n|;|\\}|$)",
				name: "meta.property.filter.css",
				patterns: [
					{
						include: "#function"
					},
					{
						include: "#property_values"
					}
				]
			},
			{
				include: "#property"
			},
			{
				include: "#interpolation"
			},
			{
				include: "$self"
			}
		]
	},
	property: {
		begin: "(?x:\\G\\s*(?:\n  (-webkit-[-A-Za-z]+|-moz-[-A-Za-z]+|-o-[-A-Za-z]+|-ms-[-A-Za-z]+|-khtml-[-A-Za-z]+|zoom|z-index|y|x|wrap|word-wrap|word-spacing|word-break|word|width|widows|white-space-collapse|white-space|white|weight|volume|voice-volume|voice-stress|voice-rate|voice-pitch-range|voice-pitch|voice-family|voice-duration|voice-balance|voice|visibility|vertical-align|variant|user-select|up|unicode-bidi|unicode-range|unicode|trim|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform|touch-action|top-width|top-style|top-right-radius|top-left-radius|top-color|top|timing-function|text-wrap|text-transform|text-shadow|text-replace|text-rendering|text-overflow|text-outline|text-justify|text-indent|text-height|text-emphasis|text-decoration|text-align-last|text-align|text|target-position|target-new|target-name|target|table-layout|tab-size|style-type|style-position|style-image|style|string-set|stretch|stress|stacking-strategy|stacking-shift|stacking-ruby|stacking|src|speed|speech-rate|speech|speak-punctuation|speak-numeral|speak-header|speak|span|spacing|space-collapse|space|sizing|size-adjust|size|shadow|respond-to|rule-width|rule-style|rule-color|rule|ruby-span|ruby-position|ruby-overhang|ruby-align|ruby|rows|rotation-point|rotation|role|right-width|right-style|right-color|right|richness|rest-before|rest-after|rest|resource|resize|reset|replace|repeat|rendering-intent|rate|radius|quotes|punctuation-trim|punctuation|property|profile|presentation-level|presentation|position|pointer-events|point|play-state|play-during|play-count|pitch-range|pitch|phonemes|pause-before|pause-after|pause|page-policy|page-break-inside|page-break-before|page-break-after|page|padding-top|padding-right|padding-left|padding-bottom|padding|pack|overhang|overflow-y|overflow-x|overflow-style|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|origin|orientation|orient|ordinal-group|order|opacity|offset|numeral|new|nav-up|nav-right|nav-left|nav-index|nav-down|nav|name|move-to|model|mix-blend-mode|min-width|min-height|min|max-width|max-height|max|marquee-style|marquee-speed|marquee-play-count|marquee-direction|marquee|marks|mark-before|mark-after|mark|margin-top|margin-right|margin-left|margin-bottom|margin|mask-image|list-style-type|list-style-position|list-style-image|list-style|list|lines|line-stacking-strategy|line-stacking-shift|line-stacking-ruby|line-stacking|line-height|line-break|level|letter-spacing|length|left-width|left-style|left-color|left|label|justify-content|justify|iteration-count|inline-box-align|initial-value|initial-size|initial-before-align|initial-before-adjust|initial-after-align|initial-after-adjust|index|indent|increment|image-resolution|image-orientation|image|icon|hyphens|hyphenate-resource|hyphenate-lines|hyphenate-character|hyphenate-before|hyphenate-after|hyphenate|height|header|hanging-punctuation|gap|grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-start|grid-row|grid-row-end|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows|row-gap|gap|font-kerning|font-language-override|font-weight|font-variant-caps|font-variant|font-style|font-synthesis|font-stretch|font-size-adjust|font-size|font-family|font|float-offset|float|flex-wrap|flex-shrink|flex-grow|flex-group|flex-flow|flex-direction|flex-basis|flex|fit-position|fit|fill|filter|family|empty-cells|emphasis|elevation|duration|drop-initial-value|drop-initial-size|drop-initial-before-align|drop-initial-before-adjust|drop-initial-after-align|drop-initial-after-adjust|drop|down|dominant-baseline|display-role|display-model|display|direction|delay|decoration-break|decoration|cursor|cue-before|cue-after|cue|crop|counter-reset|counter-increment|counter|count|content|columns|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|column-break-before|column-break-after|column|color-profile|color|collapse|clip|clear|character|caption-side|break-inside|break-before|break-after|break|box-sizing|box-shadow|box-pack|box-orient|box-ordinal-group|box-lines|box-flex-group|box-flex|box-direction|box-decoration-break|box-align|box|bottom-width|bottom-style|bottom-right-radius|bottom-left-radius|bottom-color|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-length|border-left-width|border-left-style|border-left-color|border-left|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|bookmark-target|bookmark-level|bookmark-label|bookmark|binding|bidi|before|baseline-shift|baseline|balance|background-blend-mode|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-break|background-attachment|background|azimuth|attachment|appearance|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-duration|animation-direction|animation-delay|animation-fill-mode|animation|alignment-baseline|alignment-adjust|alignment|align-self|align-last|align-items|align-content|align|after|adjust|will-change)|\n  (writing-mode|text-anchor|stroke-width|stroke-opacity|stroke-miterlimit|stroke-linejoin|stroke-linecap|stroke-dashoffset|stroke-dasharray|stroke|stop-opacity|stop-color|shape-rendering|marker-start|marker-mid|marker-end|lighting-color|kerning|image-rendering|glyph-orientation-vertical|glyph-orientation-horizontal|flood-opacity|flood-color|fill-rule|fill-opacity|fill|enable-background|color-rendering|color-interpolation-filters|color-interpolation|clip-rule|clip-path)|\n  ([a-zA-Z_-][a-zA-Z0-9_-]*)\n)(?!([^\\S\\n]*&)|([^\\S\\n]*\\{))(?=:|([^\\S\\n]+[^\\s])))",
		beginCaptures: {
			"1": {
				name: "support.type.property-name.css"
			},
			"2": {
				name: "support.type.property-name.svg.css"
			},
			"3": {
				name: "support.function.mixin.stylus"
			}
		},
		end: "(;)|(?=\\n|\\}|$)",
		endCaptures: {
			"1": {
				name: "punctuation.terminator.rule.css"
			}
		},
		patterns: [
			{
				include: "#property_value"
			}
		]
	},
	property_value: {
		begin: "\\G(?:(:)|(\\s))(\\s*)(?!&)",
		beginCaptures: {
			"1": {
				name: "punctuation.separator.key-value.css"
			},
			"2": {
				name: "punctuation.separator.key-value.css"
			}
		},
		end: "(?=\\n|;|\\})",
		endCaptures: {
			"1": {
				name: "punctuation.terminator.rule.css"
			}
		},
		name: "meta.property-value.css",
		patterns: [
			{
				include: "#property_values"
			},
			{
				match: "[^\\n]+?"
			}
		]
	},
	property_values: {
		patterns: [
			{
				include: "#function"
			},
			{
				include: "#comment"
			},
			{
				include: "#language_keywords"
			},
			{
				include: "#language_constants"
			},
			{
				match: "(?:(?=\\w)(?<![\\w-]))(wrap-reverse|wrap|whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|unicase|underline|ultra-expanded|ultra-condensed|transparent|transform|top|titling-caps|thin|thick|text-top|text-bottom|text|tb-rl|table-row-group|table-row|table-header-group|table-footer-group|table-column-group|table-column|table-cell|table|sw-resize|super|strict|stretch|step-start|step-end|static|square|space-between|space-around|space|solid|soft-light|small-caps|separate|semi-expanded|semi-condensed|se-resize|scroll|screen|saturation|s-resize|running|rtl|row-reverse|row-resize|row|round|right|ridge|reverse|repeat-y|repeat-x|repeat|relative|progressive|progress|pre-wrap|pre-line|pre|pointer|petite-caps|paused|pan-x|pan-left|pan-right|pan-y|pan-up|pan-down|padding-box|overline|overlay|outside|outset|optimizeSpeed|optimizeLegibility|opacity|oblique|nw-resize|nowrap|not-allowed|normal|none|no-repeat|no-drop|newspaper|ne-resize|n-resize|multiply|move|middle|medium|max-height|manipulation|main-size|luminosity|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|local|list-item|linear(?!-)|line-through|line-edge|line|lighter|lighten|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline-block|inline|inherit|infinite|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|hue|horizontal|hidden|help|hard-light|hand|groove|geometricPrecision|forwards|flex-start|flex-end|flex|fixed|extra-expanded|extra-condensed|expanded|exclusion|ellipsis|ease-out|ease-in-out|ease-in|ease|e-resize|double|dotted|distribute-space|distribute-letter|distribute-all-lines|distribute|disc|disabled|difference|default|decimal|dashed|darken|currentColor|crosshair|cover|content-box|contain|condensed|column-reverse|column|color-dodge|color-burn|color|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|border-box|bolder|bold|block|bidi-override|below|baseline|balance|backwards|auto|antialiased|always|alternate-reverse|alternate|all-small-caps|all-scroll|all-petite-caps|all|absolute)(?:(?<=\\w)(?![\\w-]))",
				name: "support.constant.property-value.css"
			},
			{
				match: "(?:(?=\\w)(?<![\\w-]))(start|sRGB|square|round|optimizeSpeed|optimizeQuality|nonzero|miter|middle|linearRGB|geometricPrecision |evenodd |end |crispEdges|butt|bevel)(?:(?<=\\w)(?![\\w-]))",
				name: "support.constant.property-value.svg.css"
			},
			{
				include: "#font_name"
			},
			{
				include: "#numeric"
			},
			{
				include: "#color"
			},
			{
				include: "#string"
			},
			{
				match: "\\!\\s*important",
				name: "keyword.other.important.css"
			},
			{
				include: "#operator"
			},
			{
				include: "#stylus_keywords"
			},
			{
				include: "#property_variable"
			}
		]
	},
	numeric: {
		patterns: [
			{
				captures: {
					"1": {
						name: "keyword.other.unit.css"
					}
				},
				match: "(?x) (?<!\\w|-)(?:(?:-|\\+)?(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+)) ((?:px|pt|ch|cm|mm|in|r?em|ex|pc|deg|g?rad|dpi|dpcm|dppx|fr|ms|s|turn|vh|vmax|vmin|vw)\\b|%)?",
				name: "constant.numeric.css"
			}
		]
	},
	color: {
		patterns: [
			{
				begin: "\\b(rgb|rgba|hsl|hsla)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.color.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(\\))",
				endCaptures: {
					"1": {
						name: "punctuation.section.function.css"
					}
				},
				name: "meta.function.color.css",
				patterns: [
					{
						match: "\\s*(,)\\s*",
						name: "punctuation.separator.parameter.css"
					},
					{
						include: "#numeric"
					},
					{
						include: "#property_variable"
					}
				]
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.constant.css"
					}
				},
				match: "(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b",
				name: "constant.other.color.rgb-value.css"
			},
			{
				comment: "http://www.w3.org/TR/CSS21/syndata.html#value-def-color",
				match: "\\b(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)\\b",
				name: "support.constant.color.w3c-standard-color-name.css"
			},
			{
				comment: "http://www.w3.org/TR/css3-color/#svg-color",
				match: "\\b(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|turquoise|violet|wheat|whitesmoke|yellowgreen)\\b",
				name: "support.constant.color.w3c-extended-color-name.css"
			}
		]
	},
	string: {
		patterns: [
			{
				begin: "\"",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.css"
					}
				},
				end: "\"",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.css"
					}
				},
				name: "string.quoted.double.css",
				patterns: [
					{
						match: "\\\\([a-fA-F0-9]{1,6}|.)",
						name: "constant.character.escape.css"
					}
				]
			},
			{
				begin: "'",
				beginCaptures: {
					"0": {
						name: "punctuation.definition.string.begin.css"
					}
				},
				end: "'",
				endCaptures: {
					"0": {
						name: "punctuation.definition.string.end.css"
					}
				},
				name: "string.quoted.single.css",
				patterns: [
					{
						match: "\\\\([a-fA-F0-9]{1,6}|.)",
						name: "constant.character.escape.css"
					}
				]
			}
		]
	},
	at_rule: {
		patterns: [
			{
				begin: "\\s*((@)(import|require))\\b\\s*",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.import.stylus"
					},
					"2": {
						name: "punctuation.definition.keyword.stylus"
					}
				},
				end: "\\s*((?=;|$|\\n))",
				endCaptures: {
					"1": {
						name: "punctuation.terminator.rule.css"
					}
				},
				name: "meta.at-rule.import.css",
				patterns: [
					{
						include: "#string"
					}
				]
			},
			{
				begin: "\\s*((@)(extend[s]?)\\b)\\s*",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.extend.stylus"
					},
					"2": {
						name: "punctuation.definition.keyword.stylus"
					}
				},
				end: "\\s*((?=;|$|\\n))",
				endCaptures: {
					"1": {
						name: "punctuation.terminator.rule.css"
					}
				},
				name: "meta.at-rule.extend.css",
				patterns: [
					{
						include: "#selector"
					}
				]
			},
			{
				match: "^\\s*((@)font-face)\\b",
				captures: {
					"1": {
						name: "keyword.control.at-rule.fontface.stylus"
					},
					"2": {
						name: "punctuation.definition.keyword.stylus"
					}
				},
				name: "meta.at-rule.fontface.stylus"
			},
			{
				match: "^\\s*((@)css)\\b",
				captures: {
					"1": {
						name: "keyword.control.at-rule.css.stylus"
					},
					"2": {
						name: "punctuation.definition.keyword.stylus"
					}
				},
				name: "meta.at-rule.css.stylus"
			},
			{
				begin: "\\s*((@)charset)\\b\\s*",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.charset.stylus"
					},
					"2": {
						name: "punctuation.definition.keyword.stylus"
					}
				},
				end: "\\s*((?=;|$|\\n))",
				name: "meta.at-rule.charset.stylus",
				patterns: [
					{
						include: "#string"
					}
				]
			},
			{
				begin: "\\s*((@)keyframes)\\b\\s+([a-zA-Z_-][a-zA-Z0-9_-]*)",
				beginCaptures: {
					"1": {
						name: "keyword.control.at-rule.keyframes.stylus"
					},
					"2": {
						name: "punctuation.definition.keyword.stylus"
					},
					"3": {
						name: "entity.name.function.keyframe.stylus"
					}
				},
				end: "\\s*((?=\\{|$|\\n))",
				name: "meta.at-rule.keyframes.stylus"
			},
			{
				begin: "(?=(\\b(\\d+%|from\\b|to\\b)))",
				end: "(?=(\\{|\\n))",
				name: "meta.at-rule.keyframes.stylus",
				patterns: [
					{
						match: "(\\b(\\d+%|from\\b|to\\b))",
						name: "entity.other.attribute-name.stylus"
					}
				]
			},
			{
				match: "^\\s*((@)media)\\b",
				captures: {
					"1": {
						name: "keyword.control.at-rule.media.stylus"
					},
					"2": {
						name: "punctuation.definition.keyword.stylus"
					}
				},
				name: "meta.at-rule.media.stylus"
			},
			{
				match: "(?:(?=\\w)(?<![\\w-]))(width|scan|resolution|orientation|monochrome|min-width|min-resolution|min-monochrome|min-height|min-device-width|min-device-height|min-device-aspect-ratio|min-color-index|min-color|min-aspect-ratio|max-width|max-resolution|max-monochrome|max-height|max-device-width|max-device-height|max-device-aspect-ratio|max-color-index|max-color|max-aspect-ratio|height|grid|device-width|device-height|device-aspect-ratio|color-index|color|aspect-ratio)(?:(?<=\\w)(?![\\w-]))",
				name: "support.type.property-name.media-feature.media.css"
			},
			{
				match: "(?:(?=\\w)(?<![\\w-]))(tv|tty|screen|projection|print|handheld|embossed|braille|aural|all)(?:(?<=\\w)(?![\\w-]))",
				name: "support.constant.media-type.media.css"
			},
			{
				match: "(?:(?=\\w)(?<![\\w-]))(portrait|landscape)(?:(?<=\\w)(?![\\w-]))",
				name: "support.constant.property-value.media-property.media.css"
			}
		]
	},
	operator: {
		patterns: [
			{
				match: "((?:\\?|:|!|~|\\+|(\\s-\\s)|(?:\\*)?\\*|\\/|%|(\\.)?\\.\\.|<|>|(?:=|:|\\?|\\+|-|\\*|\\/|%|<|>)?=|!=)|\\b(?:in|is(?:nt)?|(?<!:)not|or|and)\\b)",
				name: "keyword.operator.stylus"
			},
			{
				include: "#char_escape"
			}
		]
	},
	font_name: {
		match: "(\\b(?i:arial|century|comic|courier|cursive|fantasy|futura|garamond|georgia|helvetica|impact|lucida|monospace|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif)\\b)",
		name: "support.constant.font-name.css"
	},
	variable: {
		match: "(\\$[a-zA-Z_-][a-zA-Z0-9_-]*)",
		name: "variable.stylus"
	},
	property_variable: {
		patterns: [
			{
				include: "#variable"
			},
			{
				match: "(?<!^)(\\@[a-zA-Z_-][a-zA-Z0-9_-]*)",
				name: "variable.property.stylus"
			}
		]
	},
	"function": {
		begin: "(?=[a-zA-Z_-][a-zA-Z0-9_-]*\\()",
		end: "(\\))",
		endCaptures: {
			"1": {
				name: "punctuation.section.function.css"
			}
		},
		patterns: [
			{
				begin: "(format|url|local)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.misc.css",
				patterns: [
					{
						match: "(?<=\\()[^\\)\\s]*(?=\\))",
						name: "string.css"
					},
					{
						include: "#string"
					},
					{
						include: "#variable"
					},
					{
						include: "#operator"
					},
					{
						match: "\\s*"
					}
				]
			},
			{
				match: "(counter)(\\()([a-zA-Z_-][a-zA-Z0-9_-]*)(?=\\))",
				captures: {
					"1": {
						name: "support.function.misc.counter.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					},
					"3": {
						name: "variable.section.css"
					}
				},
				name: "meta.function.misc.counter.css"
			},
			{
				begin: "(counters)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.counters.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.misc.counters.css",
				patterns: [
					{
						match: "\\G[a-zA-Z_-][a-zA-Z0-9_-]*",
						name: "variable.section.css"
					},
					{
						match: "\\s*(,)\\s*",
						name: "punctuation.separator.parameter.css"
					},
					{
						include: "#string"
					},
					{
						include: "#interpolation"
					}
				]
			},
			{
				begin: "(attr)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.attr.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.misc.attr.css",
				patterns: [
					{
						match: "\\G[a-zA-Z_-][a-zA-Z0-9_-]*",
						name: "entity.other.attribute-name.attribute.css"
					},
					{
						match: "(?<=[a-zA-Z0-9_-])\\s*\\b(string|color|url|integer|number|length|em|ex|px|rem|vw|vh|vmin|vmax|mm|cm|in|pt|pc|angle|deg|grad|rad|time|s|ms|frequency|Hz|kHz|%)\\b",
						name: "support.type.attr.css"
					},
					{
						match: "\\s*(,)\\s*",
						name: "punctuation.separator.parameter.css"
					},
					{
						include: "#string"
					},
					{
						include: "#interpolation"
					}
				]
			},
			{
				begin: "(calc)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.misc.calc.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.misc.calc.css",
				patterns: [
					{
						include: "#property_values"
					}
				]
			},
			{
				begin: "(cubic-bezier)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.timing.cubic-bezier.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.timing.cubic-bezier.css",
				patterns: [
					{
						match: "\\s*(,)\\s*",
						name: "punctuation.separator.parameter.css"
					},
					{
						include: "#numeric"
					},
					{
						include: "#interpolation"
					}
				]
			},
			{
				begin: "(steps)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.timing.steps.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.timing.steps.css",
				patterns: [
					{
						match: "\\s*(,)\\s*",
						name: "punctuation.separator.parameter.css"
					},
					{
						include: "#numeric"
					},
					{
						match: "\\b(start|end)\\b",
						name: "support.constant.timing.steps.direction.css"
					},
					{
						include: "#interpolation"
					}
				]
			},
			{
				begin: "(linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.gradient.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.gradient.css",
				patterns: [
					{
						match: "\\s*(,)\\s*",
						name: "punctuation.separator.parameter.css"
					},
					{
						include: "#numeric"
					},
					{
						include: "#color"
					},
					{
						match: "\\b(to|bottom|right|left|top|circle|ellipse|center|closest-side|closest-corner|farthest-side|farthest-corner|at)\\b",
						name: "support.constant.gradient.css"
					},
					{
						include: "#interpolation"
					}
				]
			},
			{
				begin: "(blur|brightness|contrast|grayscale|hue-rotate|invert|opacity|saturate|sepia)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.filter.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.filter.css",
				patterns: [
					{
						include: "#numeric"
					},
					{
						include: "#property_variable"
					},
					{
						include: "#interpolation"
					}
				]
			},
			{
				begin: "(drop-shadow)(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.filter.drop-shadow.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.filter.drop-shadow.css",
				patterns: [
					{
						include: "#numeric"
					},
					{
						include: "#color"
					},
					{
						include: "#property_variable"
					},
					{
						include: "#interpolation"
					}
				]
			},
			{
				begin: "(matrix|matrix3d|perspective|rotate|rotate3d|rotate[Xx]|rotate[yY]|rotate[zZ]|scale|scale3d|scale[xX]|scale[yY]|scale[zZ]|skew|skew[xX]|skew[yY]|translate|translate3d|translate[xX]|translate[yY]|translate[zZ])(\\()",
				beginCaptures: {
					"1": {
						name: "support.function.transform.css"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.transform.css",
				patterns: [
					{
						include: "#numeric"
					},
					{
						include: "#property_variable"
					},
					{
						include: "#interpolation"
					}
				]
			},
			{
				match: "(url|local|format|counter|counters|attr|calc)(?=\\()",
				name: "support.function.misc.css"
			},
			{
				match: "(cubic-bezier|steps)(?=\\()",
				name: "support.function.timing.css"
			},
			{
				match: "(linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient)(?=\\()",
				name: "support.function.gradient.css"
			},
			{
				match: "(blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)(?=\\()",
				name: "support.function.filter.css"
			},
			{
				match: "(matrix|matrix3d|perspective|rotate|rotate3d|rotate[Xx]|rotate[yY]|rotate[zZ]|scale|scale3d|scale[xX]|scale[yY]|scale[zZ]|skew|skew[xX]|skew[yY]|translate|translate3d|translate[xX]|translate[yY]|translate[zZ])(?=\\()",
				name: "support.function.transform.css"
			},
			{
				begin: "([a-zA-Z_-][a-zA-Z0-9_-]*)(\\()",
				beginCaptures: {
					"1": {
						name: "entity.name.function.stylus"
					},
					"2": {
						name: "punctuation.section.function.css"
					}
				},
				end: "(?=\\))",
				name: "meta.function.stylus",
				patterns: [
					{
						name: "variable.argument.stylus",
						match: "(?x)\n--\n(?:[-a-zA-Z_]    | [^\\x00-\\x7F])     # First letter\n(?:[-a-zA-Z0-9_] | [^\\x00-\\x7F]      # Remainder of identifier\n  |\\\\(?:[0-9a-fA-F]{1,6}|.)\n)*"
					},
					{
						match: "\\s*(,)\\s*",
						name: "punctuation.separator.parameter.css"
					},
					{
						include: "#interpolation"
					},
					{
						include: "#property_values"
					}
				]
			},
			{
				match: "\\(",
				name: "punctuation.section.function.css"
			}
		]
	},
	interpolation: {
		name: "meta.interpolation.stylus",
		begin: "(?:(\\{)[^\\S\\n]*)(?=[^;=]*[^\\S\\n]*\\})",
		beginCaptures: {
			"1": {
				name: "meta.brace.curly"
			}
		},
		end: "(?:[^\\S\\n]*(\\}))|\\n|$",
		endCaptures: {
			"1": {
				name: "meta.brace.curly"
			}
		},
		patterns: [
			{
				include: "#variable"
			},
			{
				include: "#numeric"
			},
			{
				include: "#string"
			},
			{
				include: "#operator"
			}
		]
	},
	char_escape: {
		name: "constant.character.escape.stylus",
		match: "\\\\(.)"
	},
	language_constants: {
		match: "\\b(true|false|null)\\b",
		name: "constant.language.stylus"
	},
	language_keywords: {
		patterns: [
			{
				match: "(\\b|\\s)(return|else|for|unless|if|else)\\b",
				name: "keyword.control.stylus"
			},
			{
				match: "(\\b|\\s)(!important|in|is defined|is a)\\b",
				name: "keyword.other.stylus"
			},
			{
				match: "\\barguments\\b",
				name: "variable.language.stylus"
			}
		]
	}
};
const stylus_tmLanguage = {
	name: name,
	scopeName: scopeName,
	fileTypes: fileTypes,
	patterns: patterns,
	repository: repository
};

export { stylus_tmLanguage as default, fileTypes, name, patterns, repository, scopeName };
