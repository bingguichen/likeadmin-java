package com.hxkj.admin.controller.article;

import com.hxkj.admin.config.aop.Log;
import com.hxkj.admin.service.article.IArticleCategoryService;
import com.hxkj.admin.validate.article.CategoryParam;
import com.hxkj.admin.validate.common.PageParam;
import com.hxkj.admin.vo.article.ArticleCateVo;
import com.hxkj.common.core.AjaxResult;
import com.hxkj.common.core.PageResult;
import com.hxkj.common.validator.annotation.IDMust;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * 文章分类管理
 */
@RestController("articleCategoryController")
@RequestMapping("api/article/cate")
public class CategoryController {

    @Resource
    IArticleCategoryService iArticleCategoryService;

    /**
     * 分类所有
     *
     * @author fzr
     * @return Object
     */
    @GetMapping("/all")
    public Object all() {
        List<ArticleCateVo> list = iArticleCategoryService.all();
        return AjaxResult.success(list);
    }

    /**
     * 分类列表
     *
     * @author fzr
     * @param pageParam 分页参数
     * @param params 搜索参数
     * @return Object
     */
    @GetMapping("/list")
    public Object list(@Validated PageParam pageParam,
                       @RequestParam Map<String, String> params) {
        PageResult<ArticleCateVo> list = iArticleCategoryService.list(pageParam, params);
        return AjaxResult.success(list);
    }

    /**
     * 分类详情
     *
     * @author fzr
     * @param id 主键
     * @return Object
     */
    @GetMapping("/detail")
    public Object detail(@Validated @IDMust() @RequestParam("id") Integer id) {
        ArticleCateVo vo = iArticleCategoryService.detail(id);
        return AjaxResult.success(vo);
    }

    /**
     * 分类新增
     *
     * @author fzr
     * @param categoryParam 分类参数
     * @return Object
     */
    @Log(title = "文章分类新增")
    @PostMapping("/add")
    public Object add(@Validated(value = CategoryParam.create.class)
                          @RequestBody CategoryParam categoryParam) {
        iArticleCategoryService.add(categoryParam);
        return AjaxResult.success();
    }

    /**
     * 分类编辑
     *
     * @author fzr
     * @param categoryParam 分类编辑
     * @return Object
     */
    @Log(title = "文章分类编辑")
    @PostMapping("/edit")
    public Object edit(@Validated(value = CategoryParam.update.class)
                           @RequestBody CategoryParam categoryParam) {
        iArticleCategoryService.edit(categoryParam);
        return AjaxResult.success();
    }

    /**
     * 分类删除
     *
     * @author fzr
     * @param categoryParam 分类删除
     * @return Object
     */
    @Log(title = "文章分类删除")
    @PostMapping("/cateDel")
    public Object del(@Validated(value = CategoryParam.delete.class)
                          @RequestBody CategoryParam categoryParam) {
        iArticleCategoryService.del(categoryParam.getId());
        return AjaxResult.success();
    }

}