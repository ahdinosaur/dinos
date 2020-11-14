" Specify a directory for plugins
" - For Neovim: ~/.local/share/nvim/plugged
" - Avoid using standard Vim directory names like 'plugin'
call plug#begin('~/.local/share/nvim/plugged')

" Make sure you use single quotes

" --- Plugs! ---
Plug 'ahdinosaur/vim-colemak'
Plug 'tpope/vim-sensible'
"Plug 'mhinz/vim-grepper'
"Plug 'kien/ctrlp.vim'
Plug 'ycm-core/YouCompleteMe', { 'do': './install.py --clangd-completer --ts-completer --rust-completer' }
"Plug 'vim-syntastic/syntastic'
"Plug 'scrooloose/nerdtree'
"Plug 'scrooloose/nerdcommenter'
"Plug 'tpope/vim-fugitive'
Plug 'editorconfig/editorconfig-vim'
Plug 'sirtaj/vim-openscad'
Plug 'dense-analysis/ale'
Plug 'sheerun/vim-polyglot'

" color schemes
" Plug 'flazz/vim-colorschemes'
" Plug 'dracula/vim', { 'as': 'dracula' }
" Plug 'morhetz/gruvbox'
Plug 'nanotech/jellybeans.vim'
" --- /Plugs! ---

call plug#end()

" Vim5 and later versions support syntax highlighting.
" This enables syntax highlighting by default.
syntax enable " legacy vim

" set colors
set termguicolors
set t_Co=256 " legacy vim
set background=dark
colorscheme jellybeans

let g:jellybeans_overrides = {
\    'background': { 'ctermbg': 'none', '256ctermbg': 'none' },
\}
if has('termguicolors') && &termguicolors
    let g:jellybeans_overrides['background']['guibg'] = 'none'
endif
let g:jellybeans_use_term_italics = 1

" jump to the last position when
" reopening a file
if has("autocmd")
  au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
endif

" load indentation rules and plugins
" according to the detected filetype.
filetype plugin indent on " legacy vim

let mapleader=","

set showcmd    " Show (partial) command in status line.
set showmatch    " Show matching brackets.
set ignorecase   " Do case insensitive matching
set smartcase    " Do smart case matching
set incsearch    " Incremental search
set autowrite    " Automatically save before commands like :next and :make
set hidden   " Hide buffers when they are abandoned
set mouse=a    " Enable mouse usage (all modes)
set encoding=utf-8  " Set encoding as UTF-8"

" set tab / spaces
set tabstop=8
set expandtab
set softtabstop=2
set shiftwidth=2
set clipboard=unnamedplus
set synmaxcol=128
set encoding=utf-8
set wrap
set number
set nowritebackup
set noswapfile
set nobackup
set hlsearch
set ignorecase
set smartcase

" No show command
autocmd VimEnter * set nosc

" format the entire file
nmap <leader>fef ggVG=

" reload current file
nmap <leader>r :e!<CR>

" quit current file
nmap <leader>q :q<CR>

" Yank text to the OS X clipboard
noremap <leader>y "*y
noremap <leader>yy "*Y

" Preserve indentation while pasting text from the OS X clipboard
noremap <leader>p :set paste<CR>:put  *<CR>:set nopaste<CR>

" NERDTree
"nmap <leader>n :NERDTreeToggle<CR>
"let NERDTreeHighlightCursorline=1
"let NERDTreeIgnore = []
"let NERDTreeIgnore = ['node_modules']

" Syntastic
"set statusline+=%#warningmsg#
"set statusline+=%{SyntasticStatuslineFlag()}
"set statusline+=%*
"let g:syntastic_always_populate_loc_list = 1
"let g:syntastic_auto_loc_list = 1
"let g:syntastic_check_on_open = 1
"let g:syntastic_check_on_wq = 0
"let g:syntastic_mode_map = { 'mode': 'passive' }
"let g:syntastic_javascript_checkers = ['standard']

" CtrlP
"nnoremap <silent> t :CtrlP<cr>
"let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
"set wildignore+=node_modules
"let g:ctrlp_working_path_mode = 2
"let g:ctrlp_by_filename = 1
"let g:ctrlp_max_files = 20000
"let g:ctrlp_max_depth = 20

"fugitive
"set statusline+=%{fugitive#statusline()}

" rust
let g:rustfmt_autosave = 1

" eslint
let g:ale_javascript_eslint_suppress_missing_config = 1
let g:ale_linters = {
\  'javascript': ['eslint', 'standard'],
\  'typescript': ['tsserver', 'eslint'],
\  'typescriptreact': ['tsserver', 'eslint'],
\}
let g:ale_fixers = {
\  'javascript': ['prettier', 'eslint', 'standard'],
\  'typescript': ['prettier', 'eslint'],
\  'typescriptreact': ['prettier', 'eslint'],
\}
let g:ale_fix_on_save = 1
